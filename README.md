### ASRD RADIAL MENU EDITOR
Created for educational and entertainment purposes. There is a list of improvements to be made. Any help and adequate criticism is welcome.

### INFO

```RadialMenu``` is located at ```\scripts\radialmenu.txt``` and is a txt file containing a description of the available menus and their elements.

Each menu contains a label that specifies the identifier of this menu and a set of elements.

Each menu element contains a label, text, command.

Label specifies the identifier of the menu item. Tthere can be up to 9 - 
```
"Center" | "North" | "NorthEast" | "East" | "SouthEast" | "South" | "SouthWest" | "West" | "NorthWest"
```

Text specifies the presentation of the menu item on the screen.

Command specifies the action that will be performed when clicking on the menu item.

### WORKING WITH THE EDITOR

You can add arbitrary count of menus.

The editor allows you to create new menus, edit existing ones, delete and add items, and create nested menus.

Nested menus can be useful for quick access to different commands and help you avoid remembering multiple binds.

The enabled flag allows you to disable the menu item on the screen if necessary. You cannot disable ```Center``` item.

Below is an example of a truncated three-level menu with transitions in depth and back:

```
"RadialMenu"
{
	"Default"
	{
		"NorthWest"
		{
			"command"	"radialmenu Submenu1"
			"text"		"Submenu1"
		}
		"Center"
		{
			"command"	""
			"text"		"^_^"
		}
	}
	"Submenu1"
	{
		"NorthEast"
		{
			"command"	"radialmenu Submenu2"
			"text"		"Submenu2"
		}
		"Center"
		{
			"command"	"radialmenu Default"
			"text"		"back"
		}
		"SouthWest"
		{
			"command"	"cl_emote 6"
			"text"		"cl_emote 6"
		}
	}
	"Submenu2"
	{
		"Center"
		{
			"command"	"radialmenu Submenu1"
			"text"		"back"
		}
		"SouthWest"
		{
			"command"	"cl_emote 5"
			"text"		"cl_emote 5"
		}
	}
}

```

The ```Result``` tab allows you to view the final version in Txt and JSON formats, as well as download it.


### Using in the game


Make a bind to any button to open the default menu, for example

```
bind o "radialmenu Default"
```

The difference from the ```+mouse_menu command``` is that ```radialmenu``` opens the menu when pressed, and ```+mouse_menu``` - when pressed and held.

You can quickly close the menu at any time by pressing the default menu button (```Z```).

There are some peculiarities when moving through multi-level menus.

For example: when selecting a menu item that allows you to go to a submenu,
you need to click on it (at this point the submenu will open) and continue to hold the mouse button.

Now if you need to select the final command, you need to move the cursor to it and release the left mouse
button,
regardless of whether it is a submenu, no. Moving back from a submenu works on the same principle.
