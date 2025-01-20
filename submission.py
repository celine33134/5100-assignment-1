from typing import List, Tuple

from mapUtil import (
    CityMap,
    computeDistance,
    createSanJoseMap,
    locationFromTag,
    makeTag, getTotalCost,
)
from util import Heuristic, SearchProblem, State, UniformCostSearch


# *IMPORTANT* :: A key part of this assignment is figuring out how to model states
# effectively. We've defined a class `State` to help you think through this, with a
# field called `memory`.
#
# As you implement the different types of search problems below, think about what
# `memory` should contain to enable efficient search!
#   > Please read the docstring for `State` in `util.py` for more details and code.

# Please also read the docstrings for the relevant classes and functions defined in `mapUtil.py`

########################################################################################
# Problem 1a: Modeling the Shortest Path Problem.


class ShortestPathProblem(SearchProblem):
    """
    Defines a search problem that corresponds to finding the shortest path
    from `startLocation` to any location with the specified `endTag`.
    """

    def __init__(self, startLocation: str, endTag: str, cityMap: CityMap):
        self.startLocation = startLocation
        self.endTag = endTag
        self.cityMap = cityMap

    def startState(self) -> State:
        # BEGIN_YOUR_CODE
         return State(location=self.startLocation, memory=())
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE

# whether a given location (state) matches the desired endTag.
    def isEnd(self, state: State) -> bool:
        # BEGIN_YOUR_CODE
        locationTags = self.cityMap.tags[state.location]
        # return self.endTag in locationTags
        return self.endTag in locationTags and not state.memory
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE

    def successorsAndCosts(self, state: State) -> List[Tuple[str, State, float]]:
        """
        Note we want to return a list of *3-tuples* of the form:
            (successorLocation: str, successorState: State, cost: float)
        """
        # BEGIN_YOUR_CODE 
        # raise Exception("Not implemented yet")
        successors = []
        for neighbor, distance in self.cityMap.distances[state.location].items():
            successors.append((neighbor, State(location=neighbor,  memory=()), distance))
        return successors
        # END_YOUR_CODE


########################################################################################
# Problem 1b: Custom -- Plan a Route through San Jose


def getSanJoseShortestPathProblem() -> ShortestPathProblem:
    """
    Create your own search problem using the map of San Jose, specifying your own
    `startLocation`/`endTag`. If you prefer, you may create a new map using via
    `createCustomMap()`.

    Run `python mapUtil.py > readableSanJoseMap.txt` to dump a file with a list of
    locations and associated tags; you might find it useful to search for the following
    tag keys (amongst others):
        - `landmark=` - Hand-defined landmarks (from `data/sanjose-landmarks.json`)
        - `amenity=`  - Various amenity types (e.g., "parking_entrance", "food")
        - `parking=`  - Assorted parking options (e.g., "underground")
    """
    cityMap = createSanJoseMap()
    # Or, if you would rather use a custom map, you can uncomment the following!
    # cityMap = createCustomMap("data/custom.pbf", "data/custom-landmarks".json")
    # BEGIN_YOUR_CODE (our solution is 2 lines of code, but don't worry if you deviate from this)
    # raise Exception("Not implemented yet")
    # startLocation = "Northeastern University"
    startLocation = locationFromTag(makeTag("landmark", "grocery_outlet"),cityMap)
    endTag = makeTag("highway", "crossing")
    return ShortestPathProblem(startLocation, endTag, cityMap)
    # END_YOUR_CODE


########################################################################################
# Problem 2a: Modeling the Waypoints Shortest Path Problem.


class WaypointsShortestPathProblem(SearchProblem):
    """
    Defines a search problem that corresponds to finding the shortest path from
    `startLocation` to any location with the specified `endTag` such that the path also
    traverses locations that cover the set of tags in `waypointTags`.

    Hint: naively, your `memory` representation could be a list of all locations visited.
    However, that would be too large of a state space to search over! Think 
    carefully about what `memory` should represent.
    """
    def __init__(
        self, startLocation: str, waypointTags: List[str], endTag: str, cityMap: CityMap
    ):
        self.startLocation = startLocation
        self.endTag = endTag
        self.cityMap = cityMap

        # We want waypointTags to be consistent/canonical (sorted) and hashable (tuple)
        self.waypointTags = tuple(sorted(waypointTags))

    def startState(self) -> State:
        # BEGIN_YOUR_CODE 
        # raise Exception("Not implemented yet")
        return State(location=self.startLocation, memory=self.waypointTags)
        # END_YOUR_CODE

    def isEnd(self, state: State) -> bool:
        # BEGIN_YOUR_CODE
       locationTags = self.cityMap.tags.get(state.location, [])
       return self.endTag in locationTags and not state.memory
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE

    def successorsAndCosts(self, state: State) -> List[Tuple[str, State, float]]:
        # BEGIN_YOUR_CODE
        successors = []
        memory = state.memory

        for neighbor, cost in self.cityMap.distances[state.location].items():
         updatedMemory = tuple(
            tag for tag in memory if tag not in self.cityMap.tags.get(neighbor, [])
         )
         nextState = State(location=neighbor, memory=updatedMemory)
         successors.append((neighbor, nextState, cost))
        return successors
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE


########################################################################################
# Problem 2b: Custom -- Plan a Route with Unordered Waypoints through San Jose


def getSanJoseWaypointsShortestPathProblem() -> WaypointsShortestPathProblem:
    """
    Create your own search problem using the map of San Jose, specifying your own
    `startLocation`/`waypointTags`/`endTag`.

    Similar to Problem 1b, use `readableSanJoseMap.txt` to identify potential
    locations and tags.
    """
    cityMap = createSanJoseMap()
    # BEGIN_YOUR_CODE (our solution is 4 lines of code, but don't worry if you deviate from this)
    # raise Exception("Not implemented yet")
    startLocation = locationFromTag(makeTag("landmark", "MLK Library"),cityMap)
    waypointTags = [makeTag("highway", "crossing"), makeTag("amenity", "loading_dock")]
    endTag = makeTag("landmark", "grocery_outlet")

    return WaypointsShortestPathProblem(startLocation, waypointTags, endTag, cityMap)
    # END_YOUR_CODE

########################################################################################
# Problem 4a: A* to UCS reduction

# Turn an existing SearchProblem (`problem`) you are trying to solve with a
# Heuristic (`heuristic`) into a new SearchProblem (`newSearchProblem`), such
# that running uniform cost search on `newSearchProblem` is equivalent to
# running A* on `problem` subject to `heuristic`.
#
# This process of translating a model of a problem + extra constraints into a
# new instance of the same problem is called a reduction; it's a powerful tool
# for writing down "new" models in a language we're already familiar with.
# See util.py for the class definitions and methods of Heuristic and SearchProblem.


def aStarReduction(problem: SearchProblem, heuristic: Heuristic) -> SearchProblem:
    class NewSearchProblem(SearchProblem):
        def startState(self) -> State:
            # BEGIN_YOUR_CODE
            return problem.startState()
            # raise Exception("Not implemented yet")
            # END_YOUR_CODE

        def isEnd(self, state: State) -> bool:
            # BEGIN_YOUR_CODE
            return problem.isEnd(state)
            # raise Exception("Not implemented yet")
            # END_YOUR_CODE

        def successorsAndCosts(self, state: State) -> List[Tuple[str, State, float]]:
            # BEGIN_YOUR_CODE
            successors = problem.successorsAndCosts(state)
            return [
                (successorLocation, successorState, cost + heuristic.evaluate(successorState))
                for successorLocation, successorState, cost in successors
            ]

            # raise Exception("Not implemented yet")
            # END_YOUR_CODE

    return NewSearchProblem()


########################################################################################
# Problem 4b: "straight-line" heuristic for A*


class StraightLineHeuristic(Heuristic):
    """
    Estimate the cost between locations as the straight-line distance.
        > Hint: you might consider using `computeDistance` defined in `mapUtil.py`
    """
    def __init__(self, endTag: str, cityMap: CityMap):
        self.endTag = endTag
        self.cityMap = cityMap

        # Precompute all the Geolocations associated with endTag
        # BEGIN_YOUR_CODE
        self.endLocations = [
            geo
            for loc, geo in cityMap.geoLocations.items()
            if endTag in cityMap.tags[loc]
        ]
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE

    def evaluate(self, state: State) -> float:
        # BEGIN_YOUR_CODE
        currentLocation = state.location
        currentGeolocation = self.cityMap.geoLocations[currentLocation]
        return min(
            computeDistance(currentGeolocation, endGeolocation)
            for endGeolocation in self.endLocations
        )
        # raise Exception("Not implemented yet")
        # END_YOUR_CODE
