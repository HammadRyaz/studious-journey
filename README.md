I am going to add / delete / read / write by using terminal command without touching any single file

find [path] [option] [expression]

find . -name forest*		 to get ./scrimba_cli_course/geography_game/forest 
find . -type f -iname readme*
current directory and its subdirectories
-  Only look for files.
-  Match the filename case-insensitively
-   Match any filename that starts with readme.
- *OUTPUT:* ./README.md and ./scrimba_cli_course/geography_game/README.md 
- `find .` Search in the current directory and its subdirectories
- `-type f` Only look for files.
- `-iname` Match the filename case-insensitively
- `"readme*"` Match any filename that starts with readme.
- *OUTPUT:* ./README.md and ./scrimba_cli_course/geography_game/README.md

--------------------------------------------------------
## All Commands

## 📂 Navigation & Directory Basics

### 1. `pwd` (Print Working Directory)

* **Description:** Tells you exactly where you are in the file system by printing the full path of the current directory.
* **Syntax:** `pwd`
* **Example:** `pwd` *(Outputs: `/home/user/projects`)*

### 2. `ls` (List)

* **Description:** Lists all the files and folders inside your current directory.
* **Syntax:** `ls [options]`
* **Example:** `ls`

### 3. `cd` (Change Directory)

* **Description:** Moves you from your current folder into a different folder.
* **Syntax:** `cd [path_to_directory]`
* **Example:** `cd projects/geography_game`

### 4. `cd ..` (Move Up One Level)

* **Description:** Moves you backward out of the current folder and into its parent directory.
* **Syntax:** `cd ..`
* **Example:** `cd ..`

---

## 📄 Managing Files & Folders

### 5. `touch` (Create a File)

* **Description:** Creates a brand new, empty file with the name and extension you specify.
* **Syntax:** `touch [filename.ext]`
* **Example:** `touch rules.txt`

### 6. `mkdir` (Make Directory)

* **Description:** Creates a new, empty folder (directory) inside your current location.
* **Syntax:** `mkdir [folder_name]`
* **Example:** `mkdir cities`

### 7. `rm` (Remove File)

* **Description:** Permanently deletes a specific file.
* **Syntax:** `rm [filename.ext]`
* **Example:** `rm old_notes.txt`

### 8. `rmdir` (Remove Directory)

* **Description:** Permanently deletes an **empty** folder.
* **Syntax:** `rmdir [folder_name]`
* **Example:** `rmdir cities`

### 9. `rm -r` (Recursive Remove)

* **Description:** Forcefully deletes a folder *and* everything inside it (all files and subfolders). Use with caution!
* **Syntax:** `rm -r [folder_name]`
* **Example:** `rm -r geography_game`

---

## ✍️ Reading & Writing Content

### 10. `echo` (Print Text)

* **Description:** Repeats or displays a string of text back to the terminal window. Often used with `>` or `>>` to write text to files.
* **Syntax:** `echo "[text]"`
* **Example:** `echo "Welcome to the game"`

### 11. `cat` (Concatenate / Read File)

* **Description:** Reads the contents of a file and prints it directly into the terminal window.
* **Syntax:** `cat [filename.ext]`
* **Example:** `cat rules.txt`

### 12. `mv` (Move or Rename)

* **Description:** Moves a file/folder to a new location, or renames it if kept in the same location.
* **Syntax:** `mv [source] [destination]`
* **Example:** `mv rules.txt about_the_game.txt` *(Renaming)*

### 13. `cp` (Copy)

* **Description:** Makes a duplicate copy of a file at a designated destination.
* **Syntax:** `cp [source_file] [new_file]`
* **Example:** `cp rules.txt backup_rules.txt`

---

## ⚡ Power Tools (Searching & Modifying)

### 14. `grep` (Global Regular Expression Print)

* **Description:** Searches for specific text patterns inside files and prints out the entire line matching that pattern.
* **Syntax:** `grep '[pattern]' [file(s)]`
* **Example:** `grep 'CEO' team_members.txt`

### 15. `grep -n` (Search with Line Numbers)

* **Description:** Displays matching lines along with the exact line numbers where they appear in the file.
* **Syntax:** `grep -n '[pattern]' [file(s)]`
* **Example:** `grep -n ',' team*`

### 16. `grep -i` (Case-Insensitive Search)

* **Description:** Searches for a text pattern while ignoring uppercase/lowercase differences.
* **Syntax:** `grep -i '[pattern]' [file(s)]`
* **Example:** `grep -i 'ceo' team_members.txt`

### 17. `grep -r` (Recursive Search)

* **Description:** Searches for a text pattern in every single file inside the current folder and all of its subfolders.
* **Syntax:** `grep -r '[pattern]' [directory]`
* **Example:** `grep -r ',' .` *(The `.` means current directory)*

### 18. `wc` (Word Count)

* **Description:** Counts lines, words, and characters in a file (using `-l` counts just lines).
* **Syntax:** `wc [options] [file]`
* **Example:** `wc -l capitals.txt`

### 19. `sort` (Sort Lines)

* **Description:** Sorts the lines of text in a file alphabetically or numerically.
* **Syntax:** `sort [file]`
* **Example:** `sort countries.txt`
