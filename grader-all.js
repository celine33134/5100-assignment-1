var allResult = {"mode": "all", "tests": [{"number": "0a", "name": "minimum cost path", "description": "minimum cost path", "max_seconds": null, "max_points": 2, "extra_credit": false, "basic": false}, {"number": "0b", "name": "UCS basic behavior", "description": "UCS basic behavior", "max_seconds": null, "max_points": 3, "extra_credit": false, "basic": false}, {"number": "0c", "name": "UCS search behavior", "description": "UCS search behavior", "max_seconds": null, "max_points": 3, "extra_credit": false, "basic": false}, {"number": "1a-1-basic", "name": "shortest path on small grid", "description": "shortest path on small grid", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "1a-2-basic", "name": "shortest path with multiple end locations", "description": "shortest path with multiple end locations", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "1a-3-hidden", "name": "shortest path with larger grid", "description": "shortest path with larger grid", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "1a-4-basic", "name": "basic shortest path test case (1a-4)", "description": "basic shortest path test case (1a-4)", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "1a-5-basic", "name": "basic shortest path test case (1a-5)", "description": "basic shortest path test case (1a-5)", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "1a-6-basic", "name": "basic shortest path test case (1a-6)", "description": "basic shortest path test case (1a-6)", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "1a-7-hidden", "name": "hidden shortest path test case (1a-7)", "description": "hidden shortest path test case (1a-7)", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "1a-8-hidden", "name": "hidden shortest path test case (1a-8)", "description": "hidden shortest path test case (1a-8)", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "1b-custom", "name": "customized shortest path through San Jose", "description": "customized shortest path through San Jose", "max_seconds": 10, "max_points": 3, "extra_credit": false, "basic": true}, {"number": "1c", "name": "externalities of algorithm", "description": "externalities of algorithm", "max_seconds": null, "max_points": 3, "extra_credit": false, "basic": false}, {"number": "2a-1-basic", "name": "shortest path on small grid with 1 waypoint", "description": "shortest path on small grid with 1 waypoint", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-2-basic", "name": "shortest path on medium grid with 2 waypoints", "description": "shortest path on medium grid with 2 waypoints", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-3-basic", "name": "shortest path with 3 waypoints and some locations covering multiple waypoints", "description": "shortest path with 3 waypoints and some locations covering multiple waypoints", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-4-basic", "name": "shortest path with 3 waypoints and start location covering some waypoints", "description": "shortest path with 3 waypoints and start location covering some waypoints", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-5-hidden", "name": "shortest path with 4 waypoints and multiple end locations", "description": "shortest path with 4 waypoints and multiple end locations", "max_seconds": 3, "max_points": 1, "extra_credit": false, "basic": false}, {"number": "2a-6-basic", "name": "basic waypoints test case (2a-4)", "description": "basic waypoints test case (2a-4)", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-7-basic", "name": "basic waypoints test case (2a-5)", "description": "basic waypoints test case (2a-5)", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "2a-8-basic", "name": "basic waypoints test case (2a-6)", "description": "basic waypoints test case (2a-6)", "max_seconds": 3, "max_points": 1, "extra_credit": false, "basic": true}, {"number": "2a-9-hidden", "name": "hidden waypoints test case (2a-7)", "description": "hidden waypoints test case (2a-7)", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "2a-10-hidden", "name": "hidden waypoints test case (2a-8)", "description": "hidden waypoints test case (2a-8)", "max_seconds": 3, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "2a-11-hidden", "name": "hidden waypoints test case (2a-9)", "description": "hidden waypoints test case (2a-9)", "max_seconds": 5, "max_points": 1, "extra_credit": false, "basic": false}, {"number": "2b", "name": "max states with waypoints", "description": "max states with waypoints", "max_seconds": null, "max_points": 2, "extra_credit": false, "basic": false}, {"number": "2c-custom", "name": "customized shortest path with waypoints through San Jose", "description": "customized shortest path with waypoints through San Jose", "max_seconds": 10, "max_points": 3, "extra_credit": false, "basic": true}, {"number": "2d", "name": "ethical considerations", "description": "ethical considerations", "max_seconds": null, "max_points": 3, "extra_credit": false, "basic": false}, {"number": "3a-1-basic", "name": "A* shortest path on small grid", "description": "A* shortest path on small grid", "max_seconds": 1, "max_points": 1, "extra_credit": false, "basic": true}, {"number": "3a-2-basic", "name": "A* shortest path with multiple end locations", "description": "A* shortest path with multiple end locations", "max_seconds": 1, "max_points": 1, "extra_credit": false, "basic": true}, {"number": "3a-3-hidden", "name": "A* shortest path with larger grid", "description": "A* shortest path with larger grid", "max_seconds": 2, "max_points": 2, "extra_credit": false, "basic": false}, {"number": "3b-heuristic-1-basic", "name": "basic straight line heuristic unit test", "description": "basic straight line heuristic unit test", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "3b-heuristic-2-hidden", "name": "hidden straight line heuristic unit test", "description": "hidden straight line heuristic unit test", "max_seconds": 1, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "3b-astar-1-basic", "name": "basic straight line heuristic A* on San Jose map (3b-astar-1)", "description": "basic straight line heuristic A* on San Jose map (3b-astar-1)", "max_seconds": 2, "max_points": 0.5, "extra_credit": false, "basic": true}, {"number": "3b-astar-2-basic", "name": "basic straight line heuristic A* on San Jose map (3b-astar-2)", "description": "basic straight line heuristic A* on San Jose map (3b-astar-2)", "max_seconds": 2, "max_points": 1, "extra_credit": false, "basic": true}, {"number": "3b-astar-3-hidden", "name": "hidden straight line heuristic A* on San Jose map (3b-astar-3)", "description": "hidden straight line heuristic A* on San Jose map (3b-astar-3)", "max_seconds": 2, "max_points": 0.5, "extra_credit": false, "basic": false}, {"number": "3b-astar-4-hidden", "name": "hidden straight line heuristic A* on San Jose map (3b-astar-4)", "description": "hidden straight line heuristic A* on San Jose map (3b-astar-4)", "max_seconds": 2, "max_points": 1, "extra_credit": false, "basic": false}, {"number": "3c-heuristic-1-basic", "name": "basic no waypoints heuristic unit test", "description": "basic no waypoints heuristic unit test", "max_seconds": 2, "max_points": 1, "extra_credit": false, "basic": true}, {"number": "3c-heuristic-1-hidden", "name": "hidden no waypoints heuristic unit test w/ multiple end locations", "description": "hidden no waypoints heuristic unit test w/ multiple end locations", "max_seconds": 2, "max_points": 1, "extra_credit": false, "basic": false}, {"number": "3c-astar-1-basic", "name": "basic no waypoints heuristic A* on San Jose map (3c-astar-1)", "description": "basic no waypoints heuristic A* on San Jose map (3c-astar-1)", "max_seconds": 2, "max_points": 1.5, "extra_credit": false, "basic": true}, {"number": "3c-astar-2-basic", "name": "basic no waypoints heuristic A* on San Jose map (3c-astar-2)", "description": "basic no waypoints heuristic A* on San Jose map (3c-astar-2)", "max_seconds": 2, "max_points": 1.5, "extra_credit": false, "basic": true}, {"number": "3c-astar-3-hidden", "name": "hidden no waypoints heuristic A* on San Jose map (3c-astar-3)", "description": "hidden no waypoints heuristic A* on San Jose map (3c-astar-3)", "max_seconds": 10, "max_points": 3, "extra_credit": false, "basic": false}, {"number": "3d", "name": "example of n waypointTags", "description": "example of n waypointTags", "max_seconds": null, "max_points": 2, "extra_credit": false, "basic": false}], "leaderboard": []};
