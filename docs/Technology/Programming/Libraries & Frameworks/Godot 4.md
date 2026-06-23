Godot games are composed of trees of nodes. Nodes can have sub nodes and sub nodes can have their own sub nodes, on and on. Godot uses it's own [[Godot GDScript]] as it's programming language. [[Godot GDScript]] is similar to [[Python]] syntactically.


Different nodes have different properties visible in the inspector. Select a node in the scene window

# 2D
The standard unit of measurement in Godot 2D mode is pixels
## 2D Nodes
The standard root node of a 2D scene in Godot is **Node2D**.

**Sprite2D** is the standard objects in 2D.


# 3D

The standard unit of measurement in Godot 3D is meters.
## 3D Materials
The StandardMaterial3D is a basic material.

To adjust it's color or texture view it's albedo settings. To make it transparent you will need to set it's transparency properties first and then visit albedo to set it's alpha channel value from 0-255.
## 3D Nodes
The root node of a 3D scene in Godot is Node3D

MeshInstance3D is the equivalent of sprites for models.