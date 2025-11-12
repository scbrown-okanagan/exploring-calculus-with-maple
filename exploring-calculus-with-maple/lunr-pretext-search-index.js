var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "copyright",
  "level": "1",
  "url": "copyright.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "pre_lab_description",
  "level": "1",
  "url": "pre_lab_description.html",
  "type": "Preface",
  "number": "",
  "title": "Lab Description",
  "body": " Lab Description   Purpose of Lab  Your lab section is designed to supplement the content that you are learning in lecture. You will be applying those lecture topics during the lab through Maple, which is a powerful computational software. It is the goal of the lab to aid in your understanding of calculus as well as introduce you to the tools of mathematics that are available through computers.    Lab Expectations  Each week you will work on a new activity from this lab manual. Your lab instructor will inform you of which activity you will be working on each week. You must complete each component of each activity individually. Plagiarism of lab work will not be tolerated.       Prior to lab  Before lab, read through the activity as well as the recommended tutorials from the back of the book. Once you have read through the instructions and tutorials, you will need to complete the reading quiz for the activity.   Some lab computers take a couple minutes to log into. Always give yourself a few extra minutes at the start of lab to log in.     Start of lab  After logging into the school computer, you should begin by opening up the latest version of Maple as well your lab section's Moodle page. You are expected to have this lab manual with you during lab and you should complete all exercises in order. It is a great idea to have a pen or pencil handy to take notes in your manual while you complete the exercises. Your lab instructor will be available to assist you with the activity, though you will find that many of your questions can be answered by looking through the tutorial sections at the back of this book.    End of lab  Once you have completed the exercises, make sure to save your work! You are now ready to complete the activity quiz . The questions in this quiz should be relatively quick to answer once you have completed the exercises from the activity. Often, you can simply copy and paste the output from Maple into the blanks on the quiz. You will be required to submit your Maple work in the final question of the quiz.   The questions on your Moodle quiz relate to the exercises in this book. Make sure to finish your exercises prior to the quiz.     Final lab  During your final lab, you will be expected to complete an open-book lab test . The test will be based upon the activities that you have completed throughout the semester. You are permitted to have this manual during the test.    Lab Test  During your lab test, you will be permitted the following materials:  This lab manual  Handwritten notes  Maple help  Previously completed activities    The following are not allowed:  Discussion with other students  Cell phones  Other electronic devices  Email  Internet (other than Moodle for file submission)    You will be allowed to ask for clarification on questions, but will not be allowed to ask for assistance in completing a question or resolving an error in your work.  You will be expected to submit your work electronically and any duplicate submissions will receive a grade of zero. It is important to save your work frequently in case your computer encounters a serious error.   Don't forget to save your file in your cloud storage (OneDrive) . This folder is accessible from any computer. Saving your files is explained in detail in the next chapter.    "
},
{
  "id": "pre_introduction",
  "level": "1",
  "url": "pre_introduction.html",
  "type": "Preface",
  "number": "",
  "title": "Introduction to Maple",
  "body": " Introduction to Maple   The Maple Computer Algebra System  In lab, you will be using the latest version of Maple, which is a symbolic and numeric computing environment. Maple provides an interface for analyzing, exploring, visualizing, and solving mathematical problems. The interface also allows you to maintain an easy-to-follow document so that you can retrace your thought process. If you plan to pursue any branch of mathematics or field that relies on mathematics, having basic knowledge of a computer algebra system is a very useful tool.    How to Use This Manual  This book is divided into three main parts:   Part and Part consist of activities for you to complete. These activities are divided into two chapters: Calculus I and Calculus II. Each activity focuses on one topic from that course and contains a list of exercises for you to complete with Maple. Some of these exercises may give very explicit instructions for typing a command into Maple, while others may require you to use your own intuition and understanding of the capabilities of Maple.   Part consists of several chapters that provide examples of the usage of common commands in Maple. Many of these examples are designed to be minimalistic in order to show you their basic usage. Each of these examples was completed within Maple and should be reproducible on your own computer.  At the beginning of each activity, a list of the most relevant tutorials is given. It is expected that you read through those tutorials as you complete the exercises of that activity. Many activities build upon previously learned commands, so it is a good idea to thoroughly read through all of the relevant tutorials as you progress through lab.    Accessing Maple  Maple is installed on all lab computers as well as on computers in the library. However, personal copies of Maple are not available through Okanagan College at this time.    Opening Maple on School Computers  On most Windows computers, the current version of Maple is installed directly. In this case, you can simply hit the Start Menu key on your keyboard (in the lower left corner) and begin typing the word \"Maple\". Windows Search will automatically find the version installed and display a link to the application. Alternatively, you should be able to find Maple by browsing the list of installed programs on the Start Menu.  On other computers, you may need to log into a virtual machine to access Maple remotely. On these machines, you will typically find a link to VMware Horizon Client on the desktop. You will need to open this client and log into the remote machine using the same information as you previously used to log into the computer. Once the remote machine loads, you should find Maple in the Start Menu as described above.  If you are prompted to install an available update to Maple on a school computer, you may hit Cancel to decline the update.     Organizing Files in your OneDrive  You are given your own personal cloud storage through your college Microsoft account. You can find this folder by opening up File Explorer on a school computer.   Look for your OneDrive folder with the cloud icon. You will likely need to log into your Microsoft account to open this folder and you may need your phone to authenticate the login. It is best to create a new subfolder in your OneDrive folder for your lab. This folder could be called something like \"Math 112 Labs\" so that it is easy to find and organize all of your saved Maple files. When you wish to save your file in Maple, now you can navigate to this folder and save your file with the name of the activity.   The files that you have saved on your OneDrive folder on campus can be accessed from home through a browser by installing OneDrive on a personal device.    File Types  The files that Maple saves are only readable through Maple. However, you can find the Export As tool under the File menu. From there, you can change the file type to PDF and save your document. PDF files can be read by other programs, but cannot be edited by Maple.    "
},
{
  "id": "act_creating_a_maple_worksheet",
  "level": "1",
  "url": "act_creating_a_maple_worksheet.html",
  "type": "Section",
  "number": "1.1",
  "title": "Creating a Maple Worksheet",
  "body": " Creating a Maple Worksheet   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  This activity will give you practice with:  setting up a new worksheet in Maple for future activities.  switching between paragraphs for text and execution groups for Maple input.  evaluating expressions in exact and decimal form.        Open up Maple on your lab computer. If you are asked whether you would like to update Maple, you can select No. From the start page, create a new worksheet . Worksheet mode is preferable to document mode, since it is often more user-friendly.      On the first line of your worksheet you should be in Maple input, which is indicated by the > at the start of the line. Type in your first two commands, hitting Enter to run each command:   restart;  Digits:=15;    Restarting and Digits  The first command is useful for clearing any values that are assigned in Maple and should not display output. The second command specifies that we would like 15 digits of accuracy displayed when using decimals. You should see that Maple outputs the currently assigned value of Digits after running the command.     Capitalization is important in Maple code, so always make sure that Digits has a capital D! However, semicolons are optional at the end of each command. They are used when multiple commands are used together on the same Maple input.      Create a new text group using the button at the top toolbar:   In this new paragraph, type in the following information, hitting enter for a new line between each part.     Your first and last name.      Your student number.      The name of your instructor.      The title of the activity.    The new paragraph button also provides a way to enter plain text:     Inserting paragraphs in this way will merge text and maple prompts together into a single group (as of Maple 2025). Ctrl+Shift+J and Ctrl+Shift+K are useful shortcuts for creating paragraphs after or before the current line in this way.       Open up the palettes menu on the top left-hand side of Maple by clicking the small black triangle that points to the right. You may wish to use the Expression palette for the next few exercises. Closing the context panel on the right hand side of Maple will also allow you to see more of the document.      Create a new execution group by using the   button. Type the expression and hit Enter to evaluate.    Ctrl+J and Ctrl+K are useful shortcuts for creating execution groups after or before the current line.      In a new execution group, evaluate .    Use the ^ (Shift+6) for quick exponents and the arrow keys to move the cursor. You can create a fraction by encasing the numerator, , in a set of parentheses before dividing. Alternatively, you can highlight and type the \/ key to make a fraction.      In a new execution group, evaluate .    To input a square root, you can always type the sqrt() command instead of using the button in the expressions palette.      In a new execution group, evaluate .   Using decimals  Whenever possible, Maple will produce output in exact form. However, using decimals in a Maple input will produce output in decimal form (called a floating point decimal).       Evaluate each of the expressions on a new execution group.        The mathematical constant Pi must be typed into Maple as capitalized Pi . Never type pi , unless you only wish to display the Greek letter without its numerical value.              The exp(x) mathematical functions exponential function is the exponential function, . Never type using the 'e' key on the keyboard, as Maple will not recognize it as the exponential function. However, you can find and the function in the palettes toolbar.            On each of the four Maple inputs you created in , add a semicolon at the end of the line, followed by the command evalf(%) . For example:   Two commands at once  The semicolon ; separates commands if you want to run multiple commands on the same Maple input. The ditto operator, % will recall the last output and insert it into the desired command (in this case, evalf() .    cos(Pi\/6); evalf(%);   After adding the additional command to each line, run each line a second time to see two outputs: the exact form and the approximate decimal form.      If you have accidentally created any additional paragraphs or execution groups that you wish to delete, then delete them now by clicking anywhere on that line and pressing Ctrl+Del on the keyboard.      Organize your work by using a new section for each of - using the   button. Be sure to clearly label each question by creating a section title immediately to the right of the arrow at the top of the section.    You can highlight several execution groups or paragraphs with the mouse before combining them into one section. Creating sections does not work as well in document mode, so be sure to always create a new worksheet instead of a document.  The shortcuts Ctrl+. and Ctrl+, can be used to enclose execution groups or paragraphs in a section, or to remove any section enclosing an input.       (Optional) Go back to the top of your worksheet and change the second line to: > Digits := 50; . Now run the entire worksheet by clicking on the button at the top toolbar:      "
},
{
  "id": "act_creating_a_maple_worksheet-4-1",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-1",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": "  Open up Maple on your lab computer. If you are asked whether you would like to update Maple, you can select No. From the start page, create a new worksheet . Worksheet mode is preferable to document mode, since it is often more user-friendly.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-2",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-2",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": "  On the first line of your worksheet you should be in Maple input, which is indicated by the > at the start of the line. Type in your first two commands, hitting Enter to run each command:   restart;  Digits:=15;    Restarting and Digits  The first command is useful for clearing any values that are assigned in Maple and should not display output. The second command specifies that we would like 15 digits of accuracy displayed when using decimals. You should see that Maple outputs the currently assigned value of Digits after running the command.     Capitalization is important in Maple code, so always make sure that Digits has a capital D! However, semicolons are optional at the end of each command. They are used when multiple commands are used together on the same Maple input.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-3",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-3",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": "  Create a new text group using the button at the top toolbar:   In this new paragraph, type in the following information, hitting enter for a new line between each part.     Your first and last name.      Your student number.      The name of your instructor.      The title of the activity.    The new paragraph button also provides a way to enter plain text:     Inserting paragraphs in this way will merge text and maple prompts together into a single group (as of Maple 2025). Ctrl+Shift+J and Ctrl+Shift+K are useful shortcuts for creating paragraphs after or before the current line in this way.    "
},
{
  "id": "act_creating_a_maple_worksheet-4-4",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-4",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "",
  "body": "  Open up the palettes menu on the top left-hand side of Maple by clicking the small black triangle that points to the right. You may wish to use the Expression palette for the next few exercises. Closing the context panel on the right hand side of Maple will also allow you to see more of the document.   "
},
{
  "id": "ex-maple-input",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#ex-maple-input",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "",
  "body": "  Create a new execution group by using the   button. Type the expression and hit Enter to evaluate.    Ctrl+J and Ctrl+K are useful shortcuts for creating execution groups after or before the current line.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-6",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-6",
  "type": "Exercise",
  "number": "1.1.3.6",
  "title": "",
  "body": "  In a new execution group, evaluate .    Use the ^ (Shift+6) for quick exponents and the arrow keys to move the cursor. You can create a fraction by encasing the numerator, , in a set of parentheses before dividing. Alternatively, you can highlight and type the \/ key to make a fraction.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-7",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-7",
  "type": "Exercise",
  "number": "1.1.3.7",
  "title": "",
  "body": "  In a new execution group, evaluate .    To input a square root, you can always type the sqrt() command instead of using the button in the expressions palette.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-8",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-8",
  "type": "Exercise",
  "number": "1.1.3.8",
  "title": "",
  "body": "  In a new execution group, evaluate .   Using decimals  Whenever possible, Maple will produce output in exact form. However, using decimals in a Maple input will produce output in decimal form (called a floating point decimal).    "
},
{
  "id": "ex-builtin-functions",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#ex-builtin-functions",
  "type": "Exercise",
  "number": "1.1.3.9",
  "title": "",
  "body": "  Evaluate each of the expressions on a new execution group.        The mathematical constant Pi must be typed into Maple as capitalized Pi . Never type pi , unless you only wish to display the Greek letter without its numerical value.              The exp(x) mathematical functions exponential function is the exponential function, . Never type using the 'e' key on the keyboard, as Maple will not recognize it as the exponential function. However, you can find and the function in the palettes toolbar.         "
},
{
  "id": "act_creating_a_maple_worksheet-4-10",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-10",
  "type": "Exercise",
  "number": "1.1.3.10",
  "title": "",
  "body": "  On each of the four Maple inputs you created in , add a semicolon at the end of the line, followed by the command evalf(%) . For example:   Two commands at once  The semicolon ; separates commands if you want to run multiple commands on the same Maple input. The ditto operator, % will recall the last output and insert it into the desired command (in this case, evalf() .    cos(Pi\/6); evalf(%);   After adding the additional command to each line, run each line a second time to see two outputs: the exact form and the approximate decimal form.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-11",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-11",
  "type": "Exercise",
  "number": "1.1.3.11",
  "title": "",
  "body": "  If you have accidentally created any additional paragraphs or execution groups that you wish to delete, then delete them now by clicking anywhere on that line and pressing Ctrl+Del on the keyboard.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-12",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-12",
  "type": "Exercise",
  "number": "1.1.3.12",
  "title": "",
  "body": "  Organize your work by using a new section for each of - using the   button. Be sure to clearly label each question by creating a section title immediately to the right of the arrow at the top of the section.    You can highlight several execution groups or paragraphs with the mouse before combining them into one section. Creating sections does not work as well in document mode, so be sure to always create a new worksheet instead of a document.  The shortcuts Ctrl+. and Ctrl+, can be used to enclose execution groups or paragraphs in a section, or to remove any section enclosing an input.   "
},
{
  "id": "act_creating_a_maple_worksheet-4-13",
  "level": "2",
  "url": "act_creating_a_maple_worksheet.html#act_creating_a_maple_worksheet-4-13",
  "type": "Exercise",
  "number": "1.1.3.13",
  "title": "",
  "body": "   (Optional) Go back to the top of your worksheet and change the second line to: > Digits := 50; . Now run the entire worksheet by clicking on the button at the top toolbar:    "
},
{
  "id": "act_basics",
  "level": "1",
  "url": "act_basics.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Basics",
  "body": " The Basics   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  In this activity, you will learn basic usage of some of the most common Maple commands:  expand() expand  factor() factor  simplify() simplify  plot() plot        Expand the polynomial .      Factor the polynomial .    When two or more variables appear next to each other, be sure to include a * or space between them, so that Maple knows that they are multiplied together.      Simplify the expression .      Now we would like Maple perform all three commands together.   Multi-line commands  You can add a line break between commands on the same Maple input without running them with Shift+Enter.      Have Maple expand the rational expression .      Add a semicolon to the end of the line, followed by simplify(%) .      Add another semicolon to the end of the line, followed by factor(%) .      Hit Enter to run all three commands together.    Whenever the % shortcut is used on a previous command, it is a good practice to run both commands simultaneously on the same Maple input. ditto operator      You should see three outputs now: expanding, simplifying, and factoring.      (Optional) Consider polynomials of the form , where is a prime number. Try factoring each of the following:                             Can you notice a pattern and show that these polynomials follow a particular form when factored? To explain the pattern, use the   button to create a new paragraph after the current line.   New paragraph shortcut  Ctrl+Shift+J can also be used to create a paragraph after the current line.       Plot plot the following two functions using separate plot() commands and note the difference in domain:          mathematical functions th root     State the difference in domain using a new paragraph.   The surd() command  The surd(x,3) function is equivalent to . Similarly, surd(x,5) is equivalent to , etc. It is often better to use the surd() command than to use a fractional exponent.       On a new Maple input, create a plot plot of the following list of functions plot multiple functions  and include the following options (separated by commas).  x = -5..10  (This specifies the -axis) plot axes intervals  y = -5..10  (This specifies the -axis)  colour = [red,blue,green,purple,orange] plot colours      Square brackets in Maple are used to create a comma-separated list of items in the specified order. Curly braces may also be used to create a list where order does not matter.    An example of plotting multiple functions at once can be found in Section .     "
},
{
  "id": "act_basics-4-1",
  "level": "2",
  "url": "act_basics.html#act_basics-4-1",
  "type": "Exercise",
  "number": "1.2.3.1",
  "title": "",
  "body": "  Expand the polynomial .   "
},
{
  "id": "act_basics-4-2",
  "level": "2",
  "url": "act_basics.html#act_basics-4-2",
  "type": "Exercise",
  "number": "1.2.3.2",
  "title": "",
  "body": "  Factor the polynomial .    When two or more variables appear next to each other, be sure to include a * or space between them, so that Maple knows that they are multiplied together.   "
},
{
  "id": "act_basics-4-3",
  "level": "2",
  "url": "act_basics.html#act_basics-4-3",
  "type": "Exercise",
  "number": "1.2.3.3",
  "title": "",
  "body": "  Simplify the expression .   "
},
{
  "id": "act_basics-4-4",
  "level": "2",
  "url": "act_basics.html#act_basics-4-4",
  "type": "Exercise",
  "number": "1.2.3.4",
  "title": "",
  "body": "  Now we would like Maple perform all three commands together.   Multi-line commands  You can add a line break between commands on the same Maple input without running them with Shift+Enter.      Have Maple expand the rational expression .      Add a semicolon to the end of the line, followed by simplify(%) .      Add another semicolon to the end of the line, followed by factor(%) .      Hit Enter to run all three commands together.    Whenever the % shortcut is used on a previous command, it is a good practice to run both commands simultaneously on the same Maple input. ditto operator      You should see three outputs now: expanding, simplifying, and factoring.   "
},
{
  "id": "act_basics-4-5",
  "level": "2",
  "url": "act_basics.html#act_basics-4-5",
  "type": "Exercise",
  "number": "1.2.3.5",
  "title": "",
  "body": "  (Optional) Consider polynomials of the form , where is a prime number. Try factoring each of the following:                             Can you notice a pattern and show that these polynomials follow a particular form when factored? To explain the pattern, use the   button to create a new paragraph after the current line.   New paragraph shortcut  Ctrl+Shift+J can also be used to create a paragraph after the current line.    "
},
{
  "id": "act_basics-4-6",
  "level": "2",
  "url": "act_basics.html#act_basics-4-6",
  "type": "Exercise",
  "number": "1.2.3.6",
  "title": "",
  "body": "  Plot plot the following two functions using separate plot() commands and note the difference in domain:          mathematical functions th root     State the difference in domain using a new paragraph.   The surd() command  The surd(x,3) function is equivalent to . Similarly, surd(x,5) is equivalent to , etc. It is often better to use the surd() command than to use a fractional exponent.    "
},
{
  "id": "act_basics-4-7",
  "level": "2",
  "url": "act_basics.html#act_basics-4-7",
  "type": "Exercise",
  "number": "1.2.3.7",
  "title": "",
  "body": "  On a new Maple input, create a plot plot of the following list of functions plot multiple functions  and include the following options (separated by commas).  x = -5..10  (This specifies the -axis) plot axes intervals  y = -5..10  (This specifies the -axis)  colour = [red,blue,green,purple,orange] plot colours      Square brackets in Maple are used to create a comma-separated list of items in the specified order. Curly braces may also be used to create a list where order does not matter.    An example of plotting multiple functions at once can be found in Section .   "
},
{
  "id": "act_assignment_operator_and_creating_functions",
  "level": "1",
  "url": "act_assignment_operator_and_creating_functions.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Assignment Operator and Creating Functions",
  "body": " The Assignment Operator and Creating Functions   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  In this activity, you will be using the assignment operator := , which allows you assign Maple output to a name of your choice. This is especially useful for assigning expressions and functions on one Maple input, before manipulating those expressions later on in your worksheet.      In this exercise, you'll learn how to evaluate an expression at a given value of two ways: using the subs() command, and using function notation.   Instead of using the subs command multiple times, it is often a better practice to define a function and use function notation instead.      Assign the expression to expr as follows:   expr := ( sin(x) + 3)\/( cos(x) + 1);   Then use the subs() command to substitute into expr . Evaluate the result as a decimal with digits.      Assign the function as follows:   g(x) := ( sin(x) + 3)\/( cos(x) + 1);   Now, evaluate to digits to get the same result.       Assign the expression to expr2 . Then, substitute expr2 into and expand the result.      Assign the expression to poly and then substitute into poly and simplify.      The function is known as the Mexican Hat Function.     Assign the function to using the := operator. assignment operator     The exponential function, , in Maple may be typed as exp(x) . You may also use the palette toolbar to use the proper . You may not simply type the letter `e` for the natural exponential function. mathematical functions exponential       Plot the graph of . Adjust the bounds and scaling of the graph as necessary to see why this is known as the Mexican Hat Function.       Maple, by default, does not know the function , which is important in engineering.   Often, this function is denoted as and .      Assign the function using the assignment operator. assignment operator     Be sure to include a multiplication symbol or space between and .    The mathematical constant must be typed into Maple as Pi . Pi       Evaluate , , and .      Plot the graph of .      "
},
{
  "id": "act_assignment_operator_and_creating_functions-4-1",
  "level": "2",
  "url": "act_assignment_operator_and_creating_functions.html#act_assignment_operator_and_creating_functions-4-1",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "",
  "body": "  In this exercise, you'll learn how to evaluate an expression at a given value of two ways: using the subs() command, and using function notation.   Instead of using the subs command multiple times, it is often a better practice to define a function and use function notation instead.      Assign the expression to expr as follows:   expr := ( sin(x) + 3)\/( cos(x) + 1);   Then use the subs() command to substitute into expr . Evaluate the result as a decimal with digits.      Assign the function as follows:   g(x) := ( sin(x) + 3)\/( cos(x) + 1);   Now, evaluate to digits to get the same result.    "
},
{
  "id": "act_assignment_operator_and_creating_functions-4-2",
  "level": "2",
  "url": "act_assignment_operator_and_creating_functions.html#act_assignment_operator_and_creating_functions-4-2",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "",
  "body": "  Assign the expression to expr2 . Then, substitute expr2 into and expand the result.   "
},
{
  "id": "act_assignment_operator_and_creating_functions-4-3",
  "level": "2",
  "url": "act_assignment_operator_and_creating_functions.html#act_assignment_operator_and_creating_functions-4-3",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "",
  "body": "  Assign the expression to poly and then substitute into poly and simplify.   "
},
{
  "id": "act_assignment_operator_and_creating_functions-4-4",
  "level": "2",
  "url": "act_assignment_operator_and_creating_functions.html#act_assignment_operator_and_creating_functions-4-4",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "",
  "body": "  The function is known as the Mexican Hat Function.     Assign the function to using the := operator. assignment operator     The exponential function, , in Maple may be typed as exp(x) . You may also use the palette toolbar to use the proper . You may not simply type the letter `e` for the natural exponential function. mathematical functions exponential       Plot the graph of . Adjust the bounds and scaling of the graph as necessary to see why this is known as the Mexican Hat Function.    "
},
{
  "id": "act_assignment_operator_and_creating_functions-4-5",
  "level": "2",
  "url": "act_assignment_operator_and_creating_functions.html#act_assignment_operator_and_creating_functions-4-5",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "",
  "body": "  Maple, by default, does not know the function , which is important in engineering.   Often, this function is denoted as and .      Assign the function using the assignment operator. assignment operator     Be sure to include a multiplication symbol or space between and .    The mathematical constant must be typed into Maple as Pi . Pi       Evaluate , , and .      Plot the graph of .    "
},
{
  "id": "act_transformations_of_graphs",
  "level": "1",
  "url": "act_transformations_of_graphs.html",
  "type": "Section",
  "number": "1.4",
  "title": "Transformations of Graphs",
  "body": " Transformations of Graphs   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  In this activity, you will plot multiple functions at once to investigate basic transformations of functions.      Consider the graphs of and . Can we apply a transformation of one graph to obtain the other?   When plotting trigonometric functions such as and , if you do not specify the -axis interval, Maple will default to increments of from to .      Plot the graphs of and on the same set of axes. Use red for and blue for .      By what amount do you need to shift the graph of to the left (negative direction) so that it coincides with the graph of ? Answer the question in sentence form by using the   button to create a new paragraph after the current line.      By what amount do you need to shift the graph of to the right (positive direction) so that it coincides with the graph of ? Answer the question in sentence form using a new paragraph.       The graphs of and should appear to be reflected over the line because they are inverses. Plot , , and together with the option linestyle=[solid,solid,dash] so that the line of reflection is dashed. plot line style     Remember when typing the exponential function, use exp(x) or from the palettes toolbar.    An example of plotting transformations of a function can be found in .      Assign the function using the assignment operator, := . Plot all of the following functions together on the same set of axes: . Make sure that the graph is displayed with constrained scaling (1:1). Describe each transformation using a new paragraph after your plot.    When plotting a graph of any function in the form using the plot() command, you should omit the .    An example of plotting transformations of a function can be found in .    It is always a good practice to specify the colours of multiple graphs in order to tell them apart. A list of plot colours can be found by typing ?colours on a new Maple input. plot colours       Plot each of the following functions and describe how the absolute value transforms the graph.                 The absolute value function in Maple is denoted as abs( ) .             "
},
{
  "id": "act_transformations_of_graphs-4-1",
  "level": "2",
  "url": "act_transformations_of_graphs.html#act_transformations_of_graphs-4-1",
  "type": "Exercise",
  "number": "1.4.3.1",
  "title": "",
  "body": "  Consider the graphs of and . Can we apply a transformation of one graph to obtain the other?   When plotting trigonometric functions such as and , if you do not specify the -axis interval, Maple will default to increments of from to .      Plot the graphs of and on the same set of axes. Use red for and blue for .      By what amount do you need to shift the graph of to the left (negative direction) so that it coincides with the graph of ? Answer the question in sentence form by using the   button to create a new paragraph after the current line.      By what amount do you need to shift the graph of to the right (positive direction) so that it coincides with the graph of ? Answer the question in sentence form using a new paragraph.    "
},
{
  "id": "act_transformations_of_graphs-4-2",
  "level": "2",
  "url": "act_transformations_of_graphs.html#act_transformations_of_graphs-4-2",
  "type": "Exercise",
  "number": "1.4.3.2",
  "title": "",
  "body": "  The graphs of and should appear to be reflected over the line because they are inverses. Plot , , and together with the option linestyle=[solid,solid,dash] so that the line of reflection is dashed. plot line style     Remember when typing the exponential function, use exp(x) or from the palettes toolbar.    An example of plotting transformations of a function can be found in .   "
},
{
  "id": "act_transformations_of_graphs-4-3",
  "level": "2",
  "url": "act_transformations_of_graphs.html#act_transformations_of_graphs-4-3",
  "type": "Exercise",
  "number": "1.4.3.3",
  "title": "",
  "body": "  Assign the function using the assignment operator, := . Plot all of the following functions together on the same set of axes: . Make sure that the graph is displayed with constrained scaling (1:1). Describe each transformation using a new paragraph after your plot.    When plotting a graph of any function in the form using the plot() command, you should omit the .    An example of plotting transformations of a function can be found in .    It is always a good practice to specify the colours of multiple graphs in order to tell them apart. A list of plot colours can be found by typing ?colours on a new Maple input. plot colours    "
},
{
  "id": "act_transformations_of_graphs-4-4",
  "level": "2",
  "url": "act_transformations_of_graphs.html#act_transformations_of_graphs-4-4",
  "type": "Exercise",
  "number": "1.4.3.4",
  "title": "",
  "body": "  Plot each of the following functions and describe how the absolute value transforms the graph.                 The absolute value function in Maple is denoted as abs( ) .           "
},
{
  "id": "act_solving_equations_in_maple",
  "level": "1",
  "url": "act_solving_equations_in_maple.html",
  "type": "Section",
  "number": "1.5",
  "title": "Solving Equations in Maple",
  "body": " Solving Equations in Maple   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorial:       Introduction  In this activity, you will investigate the two main solvers that Maple uses, solve() and fsolve() . In some cases, you may find one is much more helpful than the other. Both commands provide unique benefits in specific circumstances.      Suppose we want to find the -intercepts of the function .   With fsolve() , you can also specify an interval for solutions if you wish to only find a particular solution. An example of this can be found in .      Assign the function to using the assignment operator := . assignment operator       Plot , choosing ranges for and so that you can clearly see all five -intercepts on the graph (you may need to adjust each a few times).      Try factoring to see if it is factorable. Does this method work for finding the -intercepts?      Try solving using the solve() command. Maple will attempt to give exact values of all five roots. Note that for challenging equations such as this one, the output may be more symbolic than you may prefer. solving equations solve       Finally, try solving using the fsolve() command. Maple will only attempt to give numerical approximations of all five roots. The number of digits given will depend on the current value assigned to Digits . solving equations fsolve        Let's look at how these two solvers behave differently for the quadratic equation .   Using solve() followed by an evalf() command is not the same as using fsolve() is most cases! In this example, one solver behaves quite differently from the other. The fact that one solver gives exact values and other other gives a numerical approximation is not the only difference.      First, start off by solving the quadratic without Maple using the formula to see if the equation has two real roots, one repeated root, or no real roots.      Now, solve the quadratic using the solve() command. This solver allows for the display of imaginary roots using . imaginary       Finally, solve the quadratic using the fsolve() command. Since this solver uses numerical approximation, it will only display real roots (if it finds any).       In this exercise, you will be finding the intersection point (x,y) of the curves and .     Plot and using a single plot() command and adjust the command as necessary to view both curves and their intersection point.    When multiple curves are plotted on the same set of axes, it is a good practice to specify the colour of each one. You can do this after specifying the ranges for and .      Use either solver ( solve() or fsolve() ) to find the - and -values of the point of intersection.    There are multiple ways that you can solve for both! You may start by solving to find the -coordinate first and then use subs() to find . Instead, you may want to solve a system of equations in one command. An example is provided in .      "
},
{
  "id": "act_solving_equations_in_maple-4-1",
  "level": "2",
  "url": "act_solving_equations_in_maple.html#act_solving_equations_in_maple-4-1",
  "type": "Exercise",
  "number": "1.5.3.1",
  "title": "",
  "body": "  Suppose we want to find the -intercepts of the function .   With fsolve() , you can also specify an interval for solutions if you wish to only find a particular solution. An example of this can be found in .      Assign the function to using the assignment operator := . assignment operator       Plot , choosing ranges for and so that you can clearly see all five -intercepts on the graph (you may need to adjust each a few times).      Try factoring to see if it is factorable. Does this method work for finding the -intercepts?      Try solving using the solve() command. Maple will attempt to give exact values of all five roots. Note that for challenging equations such as this one, the output may be more symbolic than you may prefer. solving equations solve       Finally, try solving using the fsolve() command. Maple will only attempt to give numerical approximations of all five roots. The number of digits given will depend on the current value assigned to Digits . solving equations fsolve     "
},
{
  "id": "act_solving_equations_in_maple-4-2",
  "level": "2",
  "url": "act_solving_equations_in_maple.html#act_solving_equations_in_maple-4-2",
  "type": "Exercise",
  "number": "1.5.3.2",
  "title": "",
  "body": "  Let's look at how these two solvers behave differently for the quadratic equation .   Using solve() followed by an evalf() command is not the same as using fsolve() is most cases! In this example, one solver behaves quite differently from the other. The fact that one solver gives exact values and other other gives a numerical approximation is not the only difference.      First, start off by solving the quadratic without Maple using the formula to see if the equation has two real roots, one repeated root, or no real roots.      Now, solve the quadratic using the solve() command. This solver allows for the display of imaginary roots using . imaginary       Finally, solve the quadratic using the fsolve() command. Since this solver uses numerical approximation, it will only display real roots (if it finds any).    "
},
{
  "id": "act_solving_equations_in_maple-4-3",
  "level": "2",
  "url": "act_solving_equations_in_maple.html#act_solving_equations_in_maple-4-3",
  "type": "Exercise",
  "number": "1.5.3.3",
  "title": "",
  "body": "  In this exercise, you will be finding the intersection point (x,y) of the curves and .     Plot and using a single plot() command and adjust the command as necessary to view both curves and their intersection point.    When multiple curves are plotted on the same set of axes, it is a good practice to specify the colour of each one. You can do this after specifying the ranges for and .      Use either solver ( solve() or fsolve() ) to find the - and -values of the point of intersection.    There are multiple ways that you can solve for both! You may start by solving to find the -coordinate first and then use subs() to find . Instead, you may want to solve a system of equations in one command. An example is provided in .    "
},
{
  "id": "act_limits",
  "level": "1",
  "url": "act_limits.html",
  "type": "Section",
  "number": "1.6",
  "title": "Limits",
  "body": " Limits   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorial:       Introduction  In this activity, you will use the limit() command to evaluate the limit of an expression or function. This will also include one-sided limits and limits at infinity. limit       Evaluate the limit .    There is a shortcut for limits on the palettes toolbar under Calculus.       Limits are quite useful for determining the behavour of a function around a discontinuity.   Some versions of Maple may not display discontinuities of certain functions properly. Instead, the graph may even appear as connected with a vertical line! In this case, you may include discont=true as a parameter in the plot( ) command to fix the graph output. plot discontinuities       Assign the function using the assignment operator := .      Plot , choosing a range that clearly shows the discontinuity at .      Using three different limit() commands, evaluate left-hand limit, the right-hand limit, and the two-sided limit as approaches zero.    In Maple, the absolute value function may be typed as abs( ) .       Suppose we wish to determine the behavour of on either side of the discontinuity at .     Start by assigning the function. Then, using the plot() command on the interval x=-2..2 , notice whether the left- and right-hand limits appear to be equal.      Use two limit() commands to calculate the limits .       Unless otherwise specified, the limit() command will always default to a two-sided limit. Remember that the two-sided limit exists if and only if both one-sided limits exist and are equal.     Plot the graph of and observe the behavour of the function around . Does it appear that both exist? Do they appear to be equal?    Don't forget to use instead of when plotting this expression.    For the mathematical constant , you can either type Pi or use the palettes toolbar.    Do not forget to include a space or multiplication between two consecutive symbols, and .      Evaluate using the limit() command and confirm whether the two-sided limit exists.       Calculate . limit at infinity     To denote in Maple, you may type the word infinity or use the palettes toolbar.      If you wish to explore all of the limit laws and how they apply to a challenging limit problem, you can see each step applied individually using the Limit Methods tutor. In this exercise, you will get to see a step-by-step method for evaluating . limit tutor      Open the Limit Methods tutor and type in the function sqrt(x^2+x+1)+x . Set the variable to x at -infinity and click Start to initialize the tutor. Click \"Next Step\" twice to see how Maple rewrites the expression by obtaining a common denominator and dividing by the highest power.    An example involving the Limit Methods tutor can be found in .      Finish evaluating the limit by using the buttons on the right to apply a specific limit law, or click \"All Steps\" to watch Maple apply all of the necessary laws.      "
},
{
  "id": "act_limits-4-1",
  "level": "2",
  "url": "act_limits.html#act_limits-4-1",
  "type": "Exercise",
  "number": "1.6.3.1",
  "title": "",
  "body": "  Evaluate the limit .    There is a shortcut for limits on the palettes toolbar under Calculus.    "
},
{
  "id": "act_limits-4-2",
  "level": "2",
  "url": "act_limits.html#act_limits-4-2",
  "type": "Exercise",
  "number": "1.6.3.2",
  "title": "",
  "body": "  Limits are quite useful for determining the behavour of a function around a discontinuity.   Some versions of Maple may not display discontinuities of certain functions properly. Instead, the graph may even appear as connected with a vertical line! In this case, you may include discont=true as a parameter in the plot( ) command to fix the graph output. plot discontinuities       Assign the function using the assignment operator := .      Plot , choosing a range that clearly shows the discontinuity at .      Using three different limit() commands, evaluate left-hand limit, the right-hand limit, and the two-sided limit as approaches zero.    In Maple, the absolute value function may be typed as abs( ) .    "
},
{
  "id": "act_limits-4-3",
  "level": "2",
  "url": "act_limits.html#act_limits-4-3",
  "type": "Exercise",
  "number": "1.6.3.3",
  "title": "",
  "body": "  Suppose we wish to determine the behavour of on either side of the discontinuity at .     Start by assigning the function. Then, using the plot() command on the interval x=-2..2 , notice whether the left- and right-hand limits appear to be equal.      Use two limit() commands to calculate the limits .    "
},
{
  "id": "act_limits-4-4",
  "level": "2",
  "url": "act_limits.html#act_limits-4-4",
  "type": "Exercise",
  "number": "1.6.3.4",
  "title": "",
  "body": "  Unless otherwise specified, the limit() command will always default to a two-sided limit. Remember that the two-sided limit exists if and only if both one-sided limits exist and are equal.     Plot the graph of and observe the behavour of the function around . Does it appear that both exist? Do they appear to be equal?    Don't forget to use instead of when plotting this expression.    For the mathematical constant , you can either type Pi or use the palettes toolbar.    Do not forget to include a space or multiplication between two consecutive symbols, and .      Evaluate using the limit() command and confirm whether the two-sided limit exists.    "
},
{
  "id": "act_limits-4-5",
  "level": "2",
  "url": "act_limits.html#act_limits-4-5",
  "type": "Exercise",
  "number": "1.6.3.5",
  "title": "",
  "body": "  Calculate . limit at infinity     To denote in Maple, you may type the word infinity or use the palettes toolbar.   "
},
{
  "id": "act_limits-4-6",
  "level": "2",
  "url": "act_limits.html#act_limits-4-6",
  "type": "Exercise",
  "number": "1.6.3.6",
  "title": "",
  "body": "  If you wish to explore all of the limit laws and how they apply to a challenging limit problem, you can see each step applied individually using the Limit Methods tutor. In this exercise, you will get to see a step-by-step method for evaluating . limit tutor      Open the Limit Methods tutor and type in the function sqrt(x^2+x+1)+x . Set the variable to x at -infinity and click Start to initialize the tutor. Click \"Next Step\" twice to see how Maple rewrites the expression by obtaining a common denominator and dividing by the highest power.    An example involving the Limit Methods tutor can be found in .      Finish evaluating the limit by using the buttons on the right to apply a specific limit law, or click \"All Steps\" to watch Maple apply all of the necessary laws.    "
},
{
  "id": "act_limits_and_asymptotes",
  "level": "1",
  "url": "act_limits_and_asymptotes.html",
  "type": "Section",
  "number": "1.7",
  "title": "Limits and Asymptotes",
  "body": " Limits and Asymptotes   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorial:       Introduction  It is incorrect to assume that a vertical asymptote is always found whenever the denominator of a rational function is equal to zero. Instead, we say that has a vertical asymptote at whenever .  In either case, the equation of the vertical asymptote is . limit one-sided  asymptote vertical   Similarly, a horizontal asymptote of is also defined in terms of limits. A function has a horizontal asymptote if . In this case, the equation of the horizontal asymptote is . limit at infinity  asymptote horizontal    While a function may have many vertical asymptotes, it cannot have more than two horizontal asymptotes.   You will need to use both of these definitions while answering the following exercises.      Assign the function using the assignment operator := .   Some versions of Maple may not display discontinuities of certain functions properly. Instead, the graph may even appear as connected with a vertical line! In this case, you may include discont=true as a parameter in the plot( ) command to fix the graph output. plot discontinuities       Plot the function and visually try to determine the -values of any vertical asymptotes.      Evaluate the left- and right-hand limits on either side of each value from the previous step using limit() commands. If Maple has outputted or as the value of these limits, then you have correctly determined the location of a vertical asymptote.       Assign the function .     Factor the denominator of to determine any values where the function has a discontinuity.    Maple provides a denom() command as a handy way to get the denominator of an expression. By nesting multiple commands, you should not need to retype any part of the function:   factor(denom(g(x)));       Remember that just because a rational expression has a discontinuity at a certain value, it does not mean that there is a vertical asymptote at that value! Plot so that both discontinuities are visible. How many asymptotes does have? plot        Assign the function . mathematical functions sine      Plot a graph of . Adjust the bounds for and for so that the graph shows a reasonable amount of detail and gives you and idea of any horizontal asymptotes. plot       Use the limit() command to find the horizontal asymptote(s) of . limit     An example of finding horizontal asymptotes asymptote horizontal is provided in .       Assign the function .   Maple provides a useful Asymptotes() asymptote asymptote command command for finding the asymptotes of a function. Try typing ?Asymptotes to learn more on the usage of this command.      Plot a graph of . Be sure to specify appropriate intervals for the -axis and -axis so that you can observe the shape of the function as well as whether it has any horizontal asymptotes.      Use the limit() command to find the horizontal asymptote(s) of .      "
},
{
  "id": "act_limits_and_asymptotes-4-1",
  "level": "2",
  "url": "act_limits_and_asymptotes.html#act_limits_and_asymptotes-4-1",
  "type": "Exercise",
  "number": "1.7.3.1",
  "title": "",
  "body": "  Assign the function using the assignment operator := .   Some versions of Maple may not display discontinuities of certain functions properly. Instead, the graph may even appear as connected with a vertical line! In this case, you may include discont=true as a parameter in the plot( ) command to fix the graph output. plot discontinuities       Plot the function and visually try to determine the -values of any vertical asymptotes.      Evaluate the left- and right-hand limits on either side of each value from the previous step using limit() commands. If Maple has outputted or as the value of these limits, then you have correctly determined the location of a vertical asymptote.    "
},
{
  "id": "act_limits_and_asymptotes-4-2",
  "level": "2",
  "url": "act_limits_and_asymptotes.html#act_limits_and_asymptotes-4-2",
  "type": "Exercise",
  "number": "1.7.3.2",
  "title": "",
  "body": "  Assign the function .     Factor the denominator of to determine any values where the function has a discontinuity.    Maple provides a denom() command as a handy way to get the denominator of an expression. By nesting multiple commands, you should not need to retype any part of the function:   factor(denom(g(x)));       Remember that just because a rational expression has a discontinuity at a certain value, it does not mean that there is a vertical asymptote at that value! Plot so that both discontinuities are visible. How many asymptotes does have? plot     "
},
{
  "id": "act_limits_and_asymptotes-4-3",
  "level": "2",
  "url": "act_limits_and_asymptotes.html#act_limits_and_asymptotes-4-3",
  "type": "Exercise",
  "number": "1.7.3.3",
  "title": "",
  "body": "  Assign the function . mathematical functions sine      Plot a graph of . Adjust the bounds for and for so that the graph shows a reasonable amount of detail and gives you and idea of any horizontal asymptotes. plot       Use the limit() command to find the horizontal asymptote(s) of . limit     An example of finding horizontal asymptotes asymptote horizontal is provided in .    "
},
{
  "id": "act_limits_and_asymptotes-4-4",
  "level": "2",
  "url": "act_limits_and_asymptotes.html#act_limits_and_asymptotes-4-4",
  "type": "Exercise",
  "number": "1.7.3.4",
  "title": "",
  "body": "  Assign the function .   Maple provides a useful Asymptotes() asymptote asymptote command command for finding the asymptotes of a function. Try typing ?Asymptotes to learn more on the usage of this command.      Plot a graph of . Be sure to specify appropriate intervals for the -axis and -axis so that you can observe the shape of the function as well as whether it has any horizontal asymptotes.      Use the limit() command to find the horizontal asymptote(s) of .    "
},
{
  "id": "act_shrinking_circle_problem",
  "level": "1",
  "url": "act_shrinking_circle_problem.html",
  "type": "Section",
  "number": "1.8",
  "title": "A Shrinking Circle Problem",
  "body": " A Shrinking Circle Problem   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  Limits may seem trivial when you first learn them, but they are fundamental building blocks in calculus. They are used to explain terms like infinitesimally small and infinitely large . It may be interesting to know that they can also be used in applied problems. This activity will explore a geometry problem and will solve it using limits, instead of an elementary geometric approach.   Figure below shows two circles:   , centred at the point with radius and equation .   , centred at the origin with radius and equation .     What happens to the point as the radius of the thicker circle shrinks?      If we define as the point at the top of the circle , and as the upper point of intersection of the two circles, then we can construct the line and see that it crosses the -axis. Let be the -intercept of the line .   Note that neither nor is fixed as the radius of shrinks.   Now, begin to shrink the radius of circle ; that is, let . What happens to the point as shrinks?      Assign names to the equations of both circles, such as C1 and C2 .      Find the point of intersection of and in quadrant I. These are the coordinates of and should be expressions of .    You can find the point of intersection with a single solve() command, using both equations and solving for and at once. See for an example.    You may need to include the optional parameter explicit=true to avoid the RootOf() output when using the solve() command. solving equations removing RootOf()       Now that you have the coordinates of two points, and (from the previous exercise), you can construct the equation of the line .     Find the slope of the line using the slope equation .      Using the fact that the -intercept is known to be , assign the equation of the line . lines slope-intercept form     Make sure to include multiplication or a space between two symbols, and .       Find the -coordinate of point by solving (the -intercept of this line). This coordinate should also be an expression involving .      Finally, you can determine what happens as the red circle shrinks. Determine the limit of as .    Make sure to use a right-hand limit when using the limit() command. limit      "
},
{
  "id": "fig_applied_limit",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#fig_applied_limit",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " What happens to the point as the radius of the thicker circle shrinks?     "
},
{
  "id": "act_shrinking_circle_problem-4-1",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#act_shrinking_circle_problem-4-1",
  "type": "Exercise",
  "number": "1.8.3.1",
  "title": "",
  "body": "  Assign names to the equations of both circles, such as C1 and C2 .   "
},
{
  "id": "act_shrinking_circle_problem-4-2",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#act_shrinking_circle_problem-4-2",
  "type": "Exercise",
  "number": "1.8.3.2",
  "title": "",
  "body": "  Find the point of intersection of and in quadrant I. These are the coordinates of and should be expressions of .    You can find the point of intersection with a single solve() command, using both equations and solving for and at once. See for an example.    You may need to include the optional parameter explicit=true to avoid the RootOf() output when using the solve() command. solving equations removing RootOf()    "
},
{
  "id": "act_shrinking_circle_problem-4-3",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#act_shrinking_circle_problem-4-3",
  "type": "Exercise",
  "number": "1.8.3.3",
  "title": "",
  "body": "  Now that you have the coordinates of two points, and (from the previous exercise), you can construct the equation of the line .     Find the slope of the line using the slope equation .      Using the fact that the -intercept is known to be , assign the equation of the line . lines slope-intercept form     Make sure to include multiplication or a space between two symbols, and .    "
},
{
  "id": "act_shrinking_circle_problem-4-4",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#act_shrinking_circle_problem-4-4",
  "type": "Exercise",
  "number": "1.8.3.4",
  "title": "",
  "body": "  Find the -coordinate of point by solving (the -intercept of this line). This coordinate should also be an expression involving .   "
},
{
  "id": "act_shrinking_circle_problem-4-5",
  "level": "2",
  "url": "act_shrinking_circle_problem.html#act_shrinking_circle_problem-4-5",
  "type": "Exercise",
  "number": "1.8.3.5",
  "title": "",
  "body": "  Finally, you can determine what happens as the red circle shrinks. Determine the limit of as .    Make sure to use a right-hand limit when using the limit() command. limit    "
},
{
  "id": "act_derivative_of_a_function",
  "level": "1",
  "url": "act_derivative_of_a_function.html",
  "type": "Section",
  "number": "1.9",
  "title": "The Derivative of a Function",
  "body": " The Derivative of a Function   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  In this activity, you will investigate the derivative of a function and use Maple's powerful computational skills to simplify the process of finding a derivative.      Assign the function using the assignment operator, := .     You may evaluate the derivative of using the limit definition of the derivative. Use the limit() command to evaluate . limit  limit definition of a derivative       A convenient way to evaluate the derivative of an expression is by using the diff() command. Evaluate the derivative of using this method. derivative diff       When you have assigned something using proper function notation in Maple, you may quickly use ' notation to evaluate the derivative. Evaluate using this method. derivative prime notation        Molten lava can fill a chamber in the Earth's crust before it builds up enough pressure to erupt. Suppose that the pressure of lava (in MPa) in a chamber is given by the function , where is the time in months. Start by assigning this function in Maple.     Determine the rate of change of pressure as a function of time.    You may either use exp() for the exponential function or use the palettes toolbar. Don't forget to use as your variable instead of ! mathematical functions exponential     If you have assigned the pressure of lava as a function, you can use ' notation. You can always use diff() instead, so long as you indicate the correct variable ( in this case). derivative prime notation       Determine the rate of change of pressure at months. If an eruption is likely to occur when the rate of pressure is above 20 MPa\/month, is an eruption likely at this time? Use a new paragraph to state your answer.    If you are already using ' notation, then you can simply evaluate . If you are using diff() instead, then you will need to make use of the subs() command to substitute into your derivative expression. subs        A toy rocket is fired straight upward, and its height (in metres) is given by , where is the time in seconds. Begin by assigning this expression in Maple.     Plot a graph of the height of the rocket over the specified interval of time. plot     When specifying an interval for your horizontal axis, make sure that you use as your variable instead of .      Determine the vertical velocity of the rocket as a function of time.    Recall that velocity is the rate of change of position of an object.      Use the velocity function to determine when the rocket reaches its maximum height.    At the maximum height, the rocket's vertical velocity should equal zero. Can you solve for the time at which this occurs?      What is the maximum height that the rocket attains?    An example of finding minimum and maximum values on a closed interval can be found in .       The higher derivatives of and follow a predictable pattern. In this exercise, you will look for a pattern in the derivatives of the function . The derivatives of will require use of the chain rule, which makes calculations more complicated. However, there is still a predictable pattern of higher derivatives.   The th derivative of the function can be computed by using the diff() command or ' notation. See for more information. You can also make use of the Calculus palette: derivative diff!higher derivatives  derivative prime notation!higher derivatives        Assign the function . mathematical functions sine     To type the mathematical constant , be sure to use Pi . Pi     Don't forget to include multiplication between and .      Use Maple to find the first, second, third, and fourth derivatives of . You should notice a pattern. Try to describe this pattern in a paragraph. derivative diff!higher derivatives       Using this pattern, try to predict the 77th derivative of . Then, evaluate the 77th derivative directly using a single diff() command. derivative diff!higher derivatives       (Optional) Use the examples in to write a loop that will output the first derivatives of . loops       "
},
{
  "id": "act_derivative_of_a_function-4-1",
  "level": "2",
  "url": "act_derivative_of_a_function.html#act_derivative_of_a_function-4-1",
  "type": "Exercise",
  "number": "1.9.3.1",
  "title": "",
  "body": "  Assign the function using the assignment operator, := .     You may evaluate the derivative of using the limit definition of the derivative. Use the limit() command to evaluate . limit  limit definition of a derivative       A convenient way to evaluate the derivative of an expression is by using the diff() command. Evaluate the derivative of using this method. derivative diff       When you have assigned something using proper function notation in Maple, you may quickly use ' notation to evaluate the derivative. Evaluate using this method. derivative prime notation     "
},
{
  "id": "act_derivative_of_a_function-4-2",
  "level": "2",
  "url": "act_derivative_of_a_function.html#act_derivative_of_a_function-4-2",
  "type": "Exercise",
  "number": "1.9.3.2",
  "title": "",
  "body": "  Molten lava can fill a chamber in the Earth's crust before it builds up enough pressure to erupt. Suppose that the pressure of lava (in MPa) in a chamber is given by the function , where is the time in months. Start by assigning this function in Maple.     Determine the rate of change of pressure as a function of time.    You may either use exp() for the exponential function or use the palettes toolbar. Don't forget to use as your variable instead of ! mathematical functions exponential     If you have assigned the pressure of lava as a function, you can use ' notation. You can always use diff() instead, so long as you indicate the correct variable ( in this case). derivative prime notation       Determine the rate of change of pressure at months. If an eruption is likely to occur when the rate of pressure is above 20 MPa\/month, is an eruption likely at this time? Use a new paragraph to state your answer.    If you are already using ' notation, then you can simply evaluate . If you are using diff() instead, then you will need to make use of the subs() command to substitute into your derivative expression. subs     "
},
{
  "id": "act_derivative_of_a_function-4-3",
  "level": "2",
  "url": "act_derivative_of_a_function.html#act_derivative_of_a_function-4-3",
  "type": "Exercise",
  "number": "1.9.3.3",
  "title": "",
  "body": "  A toy rocket is fired straight upward, and its height (in metres) is given by , where is the time in seconds. Begin by assigning this expression in Maple.     Plot a graph of the height of the rocket over the specified interval of time. plot     When specifying an interval for your horizontal axis, make sure that you use as your variable instead of .      Determine the vertical velocity of the rocket as a function of time.    Recall that velocity is the rate of change of position of an object.      Use the velocity function to determine when the rocket reaches its maximum height.    At the maximum height, the rocket's vertical velocity should equal zero. Can you solve for the time at which this occurs?      What is the maximum height that the rocket attains?    An example of finding minimum and maximum values on a closed interval can be found in .    "
},
{
  "id": "act_derivative_of_a_function-4-4",
  "level": "2",
  "url": "act_derivative_of_a_function.html#act_derivative_of_a_function-4-4",
  "type": "Exercise",
  "number": "1.9.3.4",
  "title": "",
  "body": "  The higher derivatives of and follow a predictable pattern. In this exercise, you will look for a pattern in the derivatives of the function . The derivatives of will require use of the chain rule, which makes calculations more complicated. However, there is still a predictable pattern of higher derivatives.   The th derivative of the function can be computed by using the diff() command or ' notation. See for more information. You can also make use of the Calculus palette: derivative diff!higher derivatives  derivative prime notation!higher derivatives        Assign the function . mathematical functions sine     To type the mathematical constant , be sure to use Pi . Pi     Don't forget to include multiplication between and .      Use Maple to find the first, second, third, and fourth derivatives of . You should notice a pattern. Try to describe this pattern in a paragraph. derivative diff!higher derivatives       Using this pattern, try to predict the 77th derivative of . Then, evaluate the 77th derivative directly using a single diff() command. derivative diff!higher derivatives       (Optional) Use the examples in to write a loop that will output the first derivatives of . loops     "
},
{
  "id": "act_tangent_lines",
  "level": "1",
  "url": "act_tangent_lines.html",
  "type": "Section",
  "number": "1.10",
  "title": "Tangent Lines",
  "body": " Tangent Lines   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  In this activity, you will calculate tangent lines to functions, at various points and graph them along with the function. You will also find points on a function where the tangent line has a specific slope.  To find the tangent line to a function at , two pieces of information are needed:  The point, .  The slope of the tangent line, .     A detailed example of finding and plotting tangent lines is described in .   Substituting these two pieces of information into the point-slope form of a line gives the following equation.  lines tangent line  lines slope of a tangent line You will need to use the resulting equation in the following exercises.      Assign the function using the assignment operator := .     Determine the equations of the tangent lines at and .    Be sure to assign different names for each tangent line, such as line1 and line2 . You will need to use unique names so that you can plot each line as well as in the next step.      Plot and the two tangent lines using a single plot() command. plot multiple functions     Since you are plotting more than one tangent line on the same axes, it is a good idea to specify plot colours. An example can be found in .       Assign the function .     Determine the equations of the tangent lines at and .    Make sure that you have properly defined your function using either exp() as the exponential function or using the from the palettes toolbar. mathematical functions exponential       Plot and the two tangent lines using a single plot() command.       Assign the function . In this exercise, you will need to solve for values of where the tangent line has a specified slope.     Determine the -values where the function has tangent lines with slope equal to .      Find the -values where the function has horizontal tangent lines. lines horizontal tangent line     You'll need to remember what the slope of a horizontal tangent line is to solve for .      "
},
{
  "id": "act_tangent_lines-4-1",
  "level": "2",
  "url": "act_tangent_lines.html#act_tangent_lines-4-1",
  "type": "Exercise",
  "number": "1.10.3.1",
  "title": "",
  "body": "  Assign the function using the assignment operator := .     Determine the equations of the tangent lines at and .    Be sure to assign different names for each tangent line, such as line1 and line2 . You will need to use unique names so that you can plot each line as well as in the next step.      Plot and the two tangent lines using a single plot() command. plot multiple functions     Since you are plotting more than one tangent line on the same axes, it is a good idea to specify plot colours. An example can be found in .    "
},
{
  "id": "act_tangent_lines-4-2",
  "level": "2",
  "url": "act_tangent_lines.html#act_tangent_lines-4-2",
  "type": "Exercise",
  "number": "1.10.3.2",
  "title": "",
  "body": "  Assign the function .     Determine the equations of the tangent lines at and .    Make sure that you have properly defined your function using either exp() as the exponential function or using the from the palettes toolbar. mathematical functions exponential       Plot and the two tangent lines using a single plot() command.    "
},
{
  "id": "act_tangent_lines-4-3",
  "level": "2",
  "url": "act_tangent_lines.html#act_tangent_lines-4-3",
  "type": "Exercise",
  "number": "1.10.3.3",
  "title": "",
  "body": "  Assign the function . In this exercise, you will need to solve for values of where the tangent line has a specified slope.     Determine the -values where the function has tangent lines with slope equal to .      Find the -values where the function has horizontal tangent lines. lines horizontal tangent line     You'll need to remember what the slope of a horizontal tangent line is to solve for .    "
},
{
  "id": "sec_building_a_roller_coaster",
  "level": "1",
  "url": "sec_building_a_roller_coaster.html",
  "type": "Section",
  "number": "1.11",
  "title": "Building a Roller Coaster",
  "body": " Building a Roller Coaster   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  You are in charge of designing the first hill of a new roller coaster. For an initial design, you connect a straight stretch of track for the lift hill followed by two parabolas, as shown in .   A simple design for the initial hill of a roller coaster.      The following criteria must be met to build the roller coaster:  The lift hill will have a slope of .  The straight section of the lift hill will cover a horizontal distance of ft.  The slope of the first descent will reach a maximum magnitude of after another ft.  The next hill will reach a height of ft after another ft.  The track must be smooth (i.e. there cannot be any sudden changes in the slope of the track).  The goal of the following exercises is to develop a piecewise function that satisfies all of the above criteria.      Let be the function for the lift hill, which is a linear function passing through the origin. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function in Maple for the lift hill, using the given slope in and a -intercept of zero.      Evaluate to determine the height at which this linear segment connects to the first parabolic segment.       Let be the function for the first parabolic segment, opening downward. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function , since must be a quadratic function.    Be sure to include multiplication between adjacent variables.      In order to satisfy the necessary roller coaster criteria, you will need to solve a system of three equations:  must equal for the two segments to connect.  must equal for the track to be smooth (differentiable) at the connection point.  , according to the third criteria.  Using a single solve() or fsolve() command, solve this system of equations for , , and . solving equations solve  solving equations fsolve       Reassign the function , this time using the values of , , and that you have just calculated.       Let be the function for the second parabolic segment, opening upward. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function , since must be a quadratic function and you should avoid using the same coefficients that you used for .    Be sure to include multiplication between adjacent variables.      In order to satisfy the necessary roller coaster criteria, you will need to solve a system of three equations:  must equal for the two parabolic segments to connect.  must equal for the track to be smooth (differentiable) at the connection point.  , according to the fourth criteria.  Using a single solve() or fsolve() command, solve this system of equations for , , and . solving equations solve  solving equations fsolve       Reassign the function , this time using the values of , , and that you have just calculated.       Now that you have determined the functions of the three segments, it's time for you to put them together as a piecewise function and plot your roller coaster. The piecewise function for the roller coaster on the interval is given by .     Use the piecewise() command to define a piecewise function called . mathematical functions piecewise     An example of a piecewise function may be found in .      Plot over the interval .      "
},
{
  "id": "fig_rollercoaster",
  "level": "2",
  "url": "sec_building_a_roller_coaster.html#fig_rollercoaster",
  "type": "Figure",
  "number": "1.2",
  "title": "",
  "body": " A simple design for the initial hill of a roller coaster.     "
},
{
  "id": "sec_building_a_roller_coaster-4-1",
  "level": "2",
  "url": "sec_building_a_roller_coaster.html#sec_building_a_roller_coaster-4-1",
  "type": "Exercise",
  "number": "1.11.3.1",
  "title": "",
  "body": "  Let be the function for the lift hill, which is a linear function passing through the origin. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function in Maple for the lift hill, using the given slope in and a -intercept of zero.      Evaluate to determine the height at which this linear segment connects to the first parabolic segment.    "
},
{
  "id": "sec_building_a_roller_coaster-4-2",
  "level": "2",
  "url": "sec_building_a_roller_coaster.html#sec_building_a_roller_coaster-4-2",
  "type": "Exercise",
  "number": "1.11.3.2",
  "title": "",
  "body": "  Let be the function for the first parabolic segment, opening downward. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function , since must be a quadratic function.    Be sure to include multiplication between adjacent variables.      In order to satisfy the necessary roller coaster criteria, you will need to solve a system of three equations:  must equal for the two segments to connect.  must equal for the track to be smooth (differentiable) at the connection point.  , according to the third criteria.  Using a single solve() or fsolve() command, solve this system of equations for , , and . solving equations solve  solving equations fsolve       Reassign the function , this time using the values of , , and that you have just calculated.    "
},
{
  "id": "sec_building_a_roller_coaster-4-3",
  "level": "2",
  "url": "sec_building_a_roller_coaster.html#sec_building_a_roller_coaster-4-3",
  "type": "Exercise",
  "number": "1.11.3.3",
  "title": "",
  "body": "  Let be the function for the second parabolic segment, opening upward. In this exercise, you will define to satisfy the necessary roller coaster criteria.     Assign the function , since must be a quadratic function and you should avoid using the same coefficients that you used for .    Be sure to include multiplication between adjacent variables.      In order to satisfy the necessary roller coaster criteria, you will need to solve a system of three equations:  must equal for the two parabolic segments to connect.  must equal for the track to be smooth (differentiable) at the connection point.  , according to the fourth criteria.  Using a single solve() or fsolve() command, solve this system of equations for , , and . solving equations solve  solving equations fsolve       Reassign the function , this time using the values of , , and that you have just calculated.    "
},
{
  "id": "sec_building_a_roller_coaster-4-4",
  "level": "2",
  "url": "sec_building_a_roller_coaster.html#sec_building_a_roller_coaster-4-4",
  "type": "Exercise",
  "number": "1.11.3.4",
  "title": "",
  "body": "  Now that you have determined the functions of the three segments, it's time for you to put them together as a piecewise function and plot your roller coaster. The piecewise function for the roller coaster on the interval is given by .     Use the piecewise() command to define a piecewise function called . mathematical functions piecewise     An example of a piecewise function may be found in .      Plot over the interval .    "
},
{
  "id": "act_implicit_functions",
  "level": "1",
  "url": "act_implicit_functions.html",
  "type": "Section",
  "number": "1.12",
  "title": "Implicit Functions",
  "body": " Implicit Functions   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  In this activity, you will learn how to plot implicit functions and compute their derivatives. You will need to ensure that the plots package is loaded using the with() command. It is typically a good idea to include packages at the start of your Maple worksheet. If you close and reopen your worksheet, you will need to run the command to load the packages again.      The equation of a circle with radius and centre is given by .  Start by assigning the equation of a circle with radius and centre at the origin to the name circle . In the following exercise, you will be determining the equations of two tangent lines to this circle and plotting them with the circle. A very similar example may be found in .     Start by plotting this circle using the implicitplot() command. Make sure that the entire circle is visible and appears smooth. implicit functions implicitplot     When plotting an equation using the implicitplot() command, the graph may not always appear smooth. This was especially common in earlier editions of Maple. If this is ever the case, you may include either numpoints=30000 or grid=[250,250] as a parameter in the implicitplot() to increase the number of plot points.      There should be exactly two points on this circle where . Substitute this value of into circle and solve for the two -coordinates. You may wish to assign these values for the next steps.    If you are assigning the output of a solve() or fsolve() command to something like yCoords and there are multiple solutions, then you may use yCoords[1] and yCoords[2] as the first and second solution, respectively.      Use the implicitdiff() command to assign the derivative, , of the circle to a name such as dydx . Then, evaluate this expression at the two points where to obtain two slopes. derivative implicit     You will need to substitute both an -coordinate and a -coordinate into the derivative for each point when using the subs() command.      Now, determine the equations of the two tangent lines at these points and assign them to line1 and line2 . Make sure to include the y= in both equations, since the implicitplot() command requires each curve to be given as an equation.    Recall that the tangent line lines tangent line equation to the curve at the point is , where .    Do not forget to include multiplication between variables and brackets to indicate multiplication instead of function notation.      Plot the circle and the two tangent lines. implicit functions implicitplot     The optional scaling=constrained parameter can be included to enforce scaling. Alternatively, the optional scaling can be performed by clicking on the graph and then clicking on the button in the plot toolbar at the top of the page.    If you are plotting multiple graphs on the same set of axes, it is a good idea to specify plot colours.       In this exercise, you will investigate the equations of tangent lines to the Folium of Descartes, given by the equation .     Assign the equation of this curve to descartes and plot it. You may need to adjust the range of your graph to get a good idea of the shape of this curve. You should be able to visibly see three points on the curve where .      Compute the derivative, and optionally, assign this to a name such as dydx2 .      There are three points on the Foilum of Descartes where . Determine the equations of the tangent lines at these three points. Then, plot the curve and all three lines on the same graph.    It is a good idea to assign these equations to unused names such as line3 , line4 , and line5 so that they don't get confused with your tangent lines in the previous exercise.    Depending on the complexity of the equation of the curve, you may find that using fsolve() to get numerical values for the -coordinates is a better option.      Looking at the graph of the Folium of Descartes, you should notice that there are multiple points where the tangent line is horizontal. Solve for these points. lines horizontal tangent line     Recall that a curve has a horizontal tangent line when .    In order to solve for both and , you will need to solve a system of two equations. One equation is that the derivative must equal zero, but the second equation is the curve itself.  An example of solving a system of equations can be found in .      "
},
{
  "id": "act_implicit_functions-4-1",
  "level": "2",
  "url": "act_implicit_functions.html#act_implicit_functions-4-1",
  "type": "Exercise",
  "number": "1.12.3.1",
  "title": "",
  "body": "  The equation of a circle with radius and centre is given by .  Start by assigning the equation of a circle with radius and centre at the origin to the name circle . In the following exercise, you will be determining the equations of two tangent lines to this circle and plotting them with the circle. A very similar example may be found in .     Start by plotting this circle using the implicitplot() command. Make sure that the entire circle is visible and appears smooth. implicit functions implicitplot     When plotting an equation using the implicitplot() command, the graph may not always appear smooth. This was especially common in earlier editions of Maple. If this is ever the case, you may include either numpoints=30000 or grid=[250,250] as a parameter in the implicitplot() to increase the number of plot points.      There should be exactly two points on this circle where . Substitute this value of into circle and solve for the two -coordinates. You may wish to assign these values for the next steps.    If you are assigning the output of a solve() or fsolve() command to something like yCoords and there are multiple solutions, then you may use yCoords[1] and yCoords[2] as the first and second solution, respectively.      Use the implicitdiff() command to assign the derivative, , of the circle to a name such as dydx . Then, evaluate this expression at the two points where to obtain two slopes. derivative implicit     You will need to substitute both an -coordinate and a -coordinate into the derivative for each point when using the subs() command.      Now, determine the equations of the two tangent lines at these points and assign them to line1 and line2 . Make sure to include the y= in both equations, since the implicitplot() command requires each curve to be given as an equation.    Recall that the tangent line lines tangent line equation to the curve at the point is , where .    Do not forget to include multiplication between variables and brackets to indicate multiplication instead of function notation.      Plot the circle and the two tangent lines. implicit functions implicitplot     The optional scaling=constrained parameter can be included to enforce scaling. Alternatively, the optional scaling can be performed by clicking on the graph and then clicking on the button in the plot toolbar at the top of the page.    If you are plotting multiple graphs on the same set of axes, it is a good idea to specify plot colours.    "
},
{
  "id": "act_implicit_functions-4-2",
  "level": "2",
  "url": "act_implicit_functions.html#act_implicit_functions-4-2",
  "type": "Exercise",
  "number": "1.12.3.2",
  "title": "",
  "body": "  In this exercise, you will investigate the equations of tangent lines to the Folium of Descartes, given by the equation .     Assign the equation of this curve to descartes and plot it. You may need to adjust the range of your graph to get a good idea of the shape of this curve. You should be able to visibly see three points on the curve where .      Compute the derivative, and optionally, assign this to a name such as dydx2 .      There are three points on the Foilum of Descartes where . Determine the equations of the tangent lines at these three points. Then, plot the curve and all three lines on the same graph.    It is a good idea to assign these equations to unused names such as line3 , line4 , and line5 so that they don't get confused with your tangent lines in the previous exercise.    Depending on the complexity of the equation of the curve, you may find that using fsolve() to get numerical values for the -coordinates is a better option.      Looking at the graph of the Folium of Descartes, you should notice that there are multiple points where the tangent line is horizontal. Solve for these points. lines horizontal tangent line     Recall that a curve has a horizontal tangent line when .    In order to solve for both and , you will need to solve a system of two equations. One equation is that the derivative must equal zero, but the second equation is the curve itself.  An example of solving a system of equations can be found in .    "
},
{
  "id": "act_orthogonal_curves",
  "level": "1",
  "url": "act_orthogonal_curves.html",
  "type": "Section",
  "number": "1.13",
  "title": "Orthogonal Curves",
  "body": " Orthogonal Curves   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  Orthogonal curves are curves that are perpendicular whenever they intersect. Perpendicular lines are an elementary example of this. lines perpendicular lines   Recall that if and are the slopes of two perpendicular lines, then . Similarly, two curves are orthogonal if their derivatives multiply to at every point where they intersect.  The majority of curves in this activity are implicit functions, so you will be using the implicitplot() command to visualize them. Make sure to include the plots package using the with() command near the top of your Maple worksheet.      In this exercise, you will show that are orthogonal curves. Start by assigning each equation a name, such as curve1 and curve2 .     Using a single implicitplot() command, plot both curves. The two curves should intersect at two points. If you enforce scaling, do they appear to be perpendicular at the intersection points? implicit functions implicitplot!multiple plots     Do not forget to include multiplication between and when defining the equation of the second curve.     scaling can be enfored by adding the optional scaling=constrained parameter to the implicitplot() command. implicit functions implicitplot!scaling     When plotting an equation using the implicitplot() command, the graph may not always appear smooth. This was especially common in earlier editions of Maple. If this is ever the case, you may include either numpoints=30000 or grid=[250,250] as a parameter in the implicitplot() command to increase the number of plot points.      Solve the system of two equations to find the - and -coordinates of the two points of intersection.    In order to find points of intersection, Maple can solve a system of equations in one solve() or fsolve() command for both and . If you choose to use the solve() command, you may need to include the optional parameter explicit=true to avoid the RootOf() output. solving equations solve  solving equations fsolve  solving equations removing RootOf()   A similar example is detailed in .      Use the implicitdiff() command to determine the derivatives of each curve at the first intersection point. Do these slopes multiply to ?    You will need to substitute both an -coordinate and a -coordinate into the derivative for each point when using the subs() command.      Use the implicitdiff() command to determine the derivatives of each curve at the second intersection point. Do these slopes multiply to ?       In this exercise, you will investigate two families of curves given by where and are constants. Each choice of and gives a slightly different curve of the same family .     Using a single plot() command, visualize these families of curves by plotting all of the following examples in one graph: Ensure that all five curves of the family are the same colour and all three curves of the family are a single, different colour. implicit functions implicitplot!multiple plots     Be sure to include the y= in each of the curves from the first family when using implicitplot() . This command only accepts equations as curves to be plotted.      Assign equation to family1 and equation to family2 . Solve the system of equations to find the - and -coordinates of the four intersection points of the two families of curves. The coordinates of the points should be given as expressions involving and .    When using the solve() command, you may need to include the optional parameter explicit=true to avoid the RootOf() output. solving equations removing RootOf()       Compute the derivative of family1 and assign it to dydx1 . Compute the derivative of family2 and assign it to dydx2 .      Substitute each of the four points from part (b) into the product dydx1*dydx2 to show that the curves are orthogonal at each of the four intersection points.      "
},
{
  "id": "act_orthogonal_curves-4-1",
  "level": "2",
  "url": "act_orthogonal_curves.html#act_orthogonal_curves-4-1",
  "type": "Exercise",
  "number": "1.13.3.1",
  "title": "",
  "body": "  In this exercise, you will show that are orthogonal curves. Start by assigning each equation a name, such as curve1 and curve2 .     Using a single implicitplot() command, plot both curves. The two curves should intersect at two points. If you enforce scaling, do they appear to be perpendicular at the intersection points? implicit functions implicitplot!multiple plots     Do not forget to include multiplication between and when defining the equation of the second curve.     scaling can be enfored by adding the optional scaling=constrained parameter to the implicitplot() command. implicit functions implicitplot!scaling     When plotting an equation using the implicitplot() command, the graph may not always appear smooth. This was especially common in earlier editions of Maple. If this is ever the case, you may include either numpoints=30000 or grid=[250,250] as a parameter in the implicitplot() command to increase the number of plot points.      Solve the system of two equations to find the - and -coordinates of the two points of intersection.    In order to find points of intersection, Maple can solve a system of equations in one solve() or fsolve() command for both and . If you choose to use the solve() command, you may need to include the optional parameter explicit=true to avoid the RootOf() output. solving equations solve  solving equations fsolve  solving equations removing RootOf()   A similar example is detailed in .      Use the implicitdiff() command to determine the derivatives of each curve at the first intersection point. Do these slopes multiply to ?    You will need to substitute both an -coordinate and a -coordinate into the derivative for each point when using the subs() command.      Use the implicitdiff() command to determine the derivatives of each curve at the second intersection point. Do these slopes multiply to ?    "
},
{
  "id": "act_orthogonal_curves-4-2",
  "level": "2",
  "url": "act_orthogonal_curves.html#act_orthogonal_curves-4-2",
  "type": "Exercise",
  "number": "1.13.3.2",
  "title": "",
  "body": "  In this exercise, you will investigate two families of curves given by where and are constants. Each choice of and gives a slightly different curve of the same family .     Using a single plot() command, visualize these families of curves by plotting all of the following examples in one graph: Ensure that all five curves of the family are the same colour and all three curves of the family are a single, different colour. implicit functions implicitplot!multiple plots     Be sure to include the y= in each of the curves from the first family when using implicitplot() . This command only accepts equations as curves to be plotted.      Assign equation to family1 and equation to family2 . Solve the system of equations to find the - and -coordinates of the four intersection points of the two families of curves. The coordinates of the points should be given as expressions involving and .    When using the solve() command, you may need to include the optional parameter explicit=true to avoid the RootOf() output. solving equations removing RootOf()       Compute the derivative of family1 and assign it to dydx1 . Compute the derivative of family2 and assign it to dydx2 .      Substitute each of the four points from part (b) into the product dydx1*dydx2 to show that the curves are orthogonal at each of the four intersection points.    "
},
{
  "id": "act_newtons_method",
  "level": "1",
  "url": "act_newtons_method.html",
  "type": "Section",
  "number": "1.14",
  "title": "Newton’s Method",
  "body": " Newton's Method   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  Newton's method is a numerical technique that can be used to approximate the roots of a continuous function. Suppose is a differentiable function and you know that at some root . However, you are unable to solve for algebraically and so you need to approximate numerically.  Newton's method relies on using linear approximation of the function at a point close to the desired root . You can begin by choosing a value relatively close to , and constructing the linear approximation of at : . Newton's method Because near , the -intercept of should be very close to . We can solve for this -intercept by setting equal to zero:   Assuming that this -intercept is even closer to than our initial value , we could use this new value and repeat these same steps: find the new linear approximation of at , solve for its -intercept, and call the value .   In this way, we only need one simple formula for Newton's method, that can be applied in repetition until we get our desired accuracy:  Newton's method formula Be warned though - there is always the possibility of finding a point on where equation is undefined!   Newton's method will fail for a number of different reasons:  the starting point leads to a cycle between two or more points  the iteration point is at a critical point, or  the derivative is discontinuous.  Be careful of such situations.   A visual example of Newton's method is shown in .   Using three iterations of Newton's method to approximate the root .      In this activity, you will be using the NewtonsMethod() command, which automates this process. It is part of the Student[Calculus1] package, which you will need to include at the top of your Maple worksheet. In the last exercise, you are encouraged to try to write a loop for Newton's method.      In this exercise, you will use Newton's method to numerically approximate the roots of the function . It is simple enough to solve for the two roots algebraically, but this example should help give you a basic understanding of how the method works.     Use Maple's NewtonsMethod() command to determine the value of the root of the function using an initial value of . Determine how many iterations are required until you get decimal places of accuracy. Newton's method NewtonsMethod     Adding the optional iterations parameter to the NewtonsMethod() command allows you to choose how many iterations are performed. By default, NewtonsMethod() carries out iterations. You can set the parameter output=sequence to show the value after each iteration.  See for an example.      Apply Newton's method to determine the value of the root of the function . This time, use an initial value of . Determine how many iterations are required until you get decimal places of accuracy.      Try to apply Newton's method to determine the value of the root of the function using an initial value of . Determine why the NewtonsMethod() command gives an error for this particular value.    You may wish to graph to see the behaviour of the function around .       In the last exercise, you used Newton's method to numerically approximate the values of the two roots, . In this example, you will use Newton's method to numerically approximate .     Assign a function that has a known root of .      Apply Newton's method to the function from part (a) with an initial value for that is close to . Then, evaluate to digits using evalf() and verify that the values agree.       Newton's method converges with quadratic convergence , which roughly means that you will get twice as many correct digits for as you did for . Iterate Newton's method for with an initial guess of . Find the value of the zero of to decimal places.      (Optional) Write a \"while\" loop that allows you to solve exercises 1 and 2. loops     Examples of loops can be found in .     "
},
{
  "id": "fig_newtonsmethod",
  "level": "2",
  "url": "act_newtons_method.html#fig_newtonsmethod",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": " Using three iterations of Newton's method to approximate the root .     "
},
{
  "id": "act_newtons_method-4-1",
  "level": "2",
  "url": "act_newtons_method.html#act_newtons_method-4-1",
  "type": "Exercise",
  "number": "1.14.3.1",
  "title": "",
  "body": "  In this exercise, you will use Newton's method to numerically approximate the roots of the function . It is simple enough to solve for the two roots algebraically, but this example should help give you a basic understanding of how the method works.     Use Maple's NewtonsMethod() command to determine the value of the root of the function using an initial value of . Determine how many iterations are required until you get decimal places of accuracy. Newton's method NewtonsMethod     Adding the optional iterations parameter to the NewtonsMethod() command allows you to choose how many iterations are performed. By default, NewtonsMethod() carries out iterations. You can set the parameter output=sequence to show the value after each iteration.  See for an example.      Apply Newton's method to determine the value of the root of the function . This time, use an initial value of . Determine how many iterations are required until you get decimal places of accuracy.      Try to apply Newton's method to determine the value of the root of the function using an initial value of . Determine why the NewtonsMethod() command gives an error for this particular value.    You may wish to graph to see the behaviour of the function around .    "
},
{
  "id": "act_newtons_method-4-2",
  "level": "2",
  "url": "act_newtons_method.html#act_newtons_method-4-2",
  "type": "Exercise",
  "number": "1.14.3.2",
  "title": "",
  "body": "  In the last exercise, you used Newton's method to numerically approximate the values of the two roots, . In this example, you will use Newton's method to numerically approximate .     Assign a function that has a known root of .      Apply Newton's method to the function from part (a) with an initial value for that is close to . Then, evaluate to digits using evalf() and verify that the values agree.    "
},
{
  "id": "act_newtons_method-4-3",
  "level": "2",
  "url": "act_newtons_method.html#act_newtons_method-4-3",
  "type": "Exercise",
  "number": "1.14.3.3",
  "title": "",
  "body": "  Newton's method converges with quadratic convergence , which roughly means that you will get twice as many correct digits for as you did for . Iterate Newton's method for with an initial guess of . Find the value of the zero of to decimal places.   "
},
{
  "id": "act_newtons_method-4-4",
  "level": "2",
  "url": "act_newtons_method.html#act_newtons_method-4-4",
  "type": "Exercise",
  "number": "1.14.3.4",
  "title": "",
  "body": "  (Optional) Write a \"while\" loop that allows you to solve exercises 1 and 2. loops     Examples of loops can be found in .   "
},
{
  "id": "act_shape_of_a_can",
  "level": "1",
  "url": "act_shape_of_a_can.html",
  "type": "Section",
  "number": "1.15",
  "title": "The Shape of a Can",
  "body": " The Shape of a Can   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  Your goal in this activity is to determine the height and radius of a perfectly cylindrical can that gives a total volume of 250 mL (250 cm ) and uses the least amount of material to create.   A simple can in the shape of a circular cylinder.      To construct the can, there are three surfaces: the cylindrical side and the two circles that form the top and bottom. These three surfaces will all be cut from a sheet of aluminum. The cylindrical side of the can is made from a single rectangle, so that no material is wasted from the sheet aluminum when it is cut out. However, some amount of material is always wasted from the sheet when cutting the circles for the top and bottom.  Since it is your goal to reduce the cost of material, you will have to calculate how much of the aluminum sheet will be required to construct the can, including any material that is wasted while cutting the circles. Consider a couple possible options for cutting the circles out of a sheet of aluminum.   Cutting circles in a square pattern.     Cutting circles in a hexagonal pattern.    If the circles are cut in a rectangular grid patter as in to , then you can see right away just how much extra material is wasted from the sheet of aluminum. However, if you cut out circles in a hexagonal pattern as in Figure , then you have already begun to minimize the total amount of the aluminum sheet that is required for the top and bottom.  In the exercises below, you will set up an equation for the total area of sheet metal required for the cylindrical side and the two circles, which will be cut according to this hexagonal pattern. From that equation, you will determine the height and radius of the can that minimize that area.      The side of the can can be cut from the sheet aluminum as a single rectangle, with no wasted material. One side of this rectangle has a length of and the other side has a length equal to the circumference of the can.  Determine an expression for the area of this rectangle in terms of its radius and height , and assign it to sideArea .    Since will be involved in this expression, don't forget to type the constant as Pi or use the palettes toolbar. Pi       Since each of the circles will effectively use an entire hexagonal area from the sheet metal, you will need to calculate the area of a hexagon that circumscribes a circle of radius , as shown in .   A hexagon circumscribing a circle.         The hexagon shown in consists of six equal triangles, each with a base and height . Using trigonometry, determine the length of in terms of . Then, determine the area of one of these triangles using .    You may use trigonometric ratios of and to compute the exact length of in terms of .      Determine an expression for the total area of this hexagon in terms of only and assign it to hexagonArea .       The total amount of sheet aluminum needed for the cylindrical can is given by . Assign this expression in Maple. totalArea should be an expression that relies on both the height and radius of the can.      Since the required volume of the can is 250 cm , you must satisfy the constraint . Using this constraint allows you to give totalArea as an objective function that consists only of one variable, .     Solve the volume constraint for and substitute the expression into totalArea . Then, reassign this new single-variable expression to totalArea .      Plot totalArea from part (a) over the interval r = 0 ..5 , with a vertical range of A=-200..400 . You should notice a minimum on the graph.      Use the first derivative of totalArea to determine the value of that minimizes the total area. Use the second derivative of totalArea to show that this value gives a minimum by the Second Derivative Test.    The minimum should occur at a critical value where the first derivative equals zero. Try using a solve() command to determine the exact value where this is true. If the second derivative at that point is negative, then the critical value must give a minimum.       Now that you know the radius of the can, use the volume constraint to determine the height of the can that minimizes the total amount of sheet aluminum used.   It can be shown that the ratio of height to radius of the optimized can is , regardless of volume.       Show that the ratio of height to radius is .     "
},
{
  "id": "act_shape_of_a_can-3-3",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-3-3",
  "type": "Figure",
  "number": "1.4",
  "title": "",
  "body": " A simple can in the shape of a circular cylinder.     "
},
{
  "id": "fig_square",
  "level": "2",
  "url": "act_shape_of_a_can.html#fig_square",
  "type": "Figure",
  "number": "1.5",
  "title": "",
  "body": " Cutting circles in a square pattern.   "
},
{
  "id": "fig_hexagon",
  "level": "2",
  "url": "act_shape_of_a_can.html#fig_hexagon",
  "type": "Figure",
  "number": "1.6",
  "title": "",
  "body": " Cutting circles in a hexagonal pattern.   "
},
{
  "id": "act_shape_of_a_can-4-1",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-1",
  "type": "Exercise",
  "number": "1.15.3.1",
  "title": "",
  "body": "  The side of the can can be cut from the sheet aluminum as a single rectangle, with no wasted material. One side of this rectangle has a length of and the other side has a length equal to the circumference of the can.  Determine an expression for the area of this rectangle in terms of its radius and height , and assign it to sideArea .    Since will be involved in this expression, don't forget to type the constant as Pi or use the palettes toolbar. Pi    "
},
{
  "id": "act_shape_of_a_can-4-2",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-2",
  "type": "Exercise",
  "number": "1.15.3.2",
  "title": "",
  "body": "  Since each of the circles will effectively use an entire hexagonal area from the sheet metal, you will need to calculate the area of a hexagon that circumscribes a circle of radius , as shown in .   A hexagon circumscribing a circle.         The hexagon shown in consists of six equal triangles, each with a base and height . Using trigonometry, determine the length of in terms of . Then, determine the area of one of these triangles using .    You may use trigonometric ratios of and to compute the exact length of in terms of .      Determine an expression for the total area of this hexagon in terms of only and assign it to hexagonArea .    "
},
{
  "id": "act_shape_of_a_can-4-3",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-3",
  "type": "Exercise",
  "number": "1.15.3.3",
  "title": "",
  "body": "  The total amount of sheet aluminum needed for the cylindrical can is given by . Assign this expression in Maple. totalArea should be an expression that relies on both the height and radius of the can.   "
},
{
  "id": "act_shape_of_a_can-4-4",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-4",
  "type": "Exercise",
  "number": "1.15.3.4",
  "title": "",
  "body": "  Since the required volume of the can is 250 cm , you must satisfy the constraint . Using this constraint allows you to give totalArea as an objective function that consists only of one variable, .     Solve the volume constraint for and substitute the expression into totalArea . Then, reassign this new single-variable expression to totalArea .      Plot totalArea from part (a) over the interval r = 0 ..5 , with a vertical range of A=-200..400 . You should notice a minimum on the graph.      Use the first derivative of totalArea to determine the value of that minimizes the total area. Use the second derivative of totalArea to show that this value gives a minimum by the Second Derivative Test.    The minimum should occur at a critical value where the first derivative equals zero. Try using a solve() command to determine the exact value where this is true. If the second derivative at that point is negative, then the critical value must give a minimum.    "
},
{
  "id": "act_shape_of_a_can-4-5",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-5",
  "type": "Exercise",
  "number": "1.15.3.5",
  "title": "",
  "body": "  Now that you know the radius of the can, use the volume constraint to determine the height of the can that minimizes the total amount of sheet aluminum used.   It can be shown that the ratio of height to radius of the optimized can is , regardless of volume.    "
},
{
  "id": "act_shape_of_a_can-4-6",
  "level": "2",
  "url": "act_shape_of_a_can.html#act_shape_of_a_can-4-6",
  "type": "Exercise",
  "number": "1.15.3.6",
  "title": "",
  "body": "  Show that the ratio of height to radius is .   "
},
{
  "id": "act_sweet_16",
  "level": "1",
  "url": "act_sweet_16.html",
  "type": "Section",
  "number": "1.16",
  "title": "Sweet 16",
  "body": " Sweet 16   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  We all know that exhibits the following interesting property: In this activity, you will explore whether there exist any other positive integers and ( ) such that . To determine if there are integer solutions to equation , you will need to rely on unusual tactics, including the use of Rolle's Theorem:   Rolle's Theorem   Let be a function that satisfies the following three hypotheses:  is continuous on the closed interval .  is differentiable on the open interval .  .  Then there is a number in such that . Rolle's theorem    If we remove the restriction that and have to be integers, then this problem becomes a lot more interesting.  It can be shown that for any value , there exist real numbers and that satisfy with . To prove this, one needs to be very careful in evaluating the limit . It is not obvious that this limit goes to infinity. However, if it does, all will have the desired property. It may help to recall that . So, just because the base tends to and the exponent tends to infinity, the value of is not necessarily infinity. limit  limit at infinity  limit definition of e          If you rearrange equation to separate variables, you can write the equation as . You can obtain this equivalent equation by taking the natural logarithm of both sides of equation . Then, divide that result by both and . Notice how the equation in this form is set up so that you can apply Rolle's Theorem.     Assign the function in Maple.      Evaluate the derivative of . Notice that is differentiable (and therefore continuous) for all .      Solve for any critical value(s) of where . How many critical values are there? shapes of curves critical number        Now you are ready to apply Rolle's Theorem (and a bit of reasoning) to determine if there are any other positive integers and that satisfy equation . There are no calculations to perform in this exercise. Instead, you will need to adequately explain your answers in paragraph form.  Let's begin by assuming that .     If and satisfy equation , then . From what Rolle's Theorem states, what does this tell you about the location of a critical value of where ?      Since you have already found the critical value(s) of , can there be any other positive integers and such that ?       What have you concluded about the problem? Are there any other positive integers and ( ) that satisfy equation ?     "
},
{
  "id": "thm-rolles",
  "level": "2",
  "url": "act_sweet_16.html#thm-rolles",
  "type": "Theorem",
  "number": "1.8",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   Let be a function that satisfies the following three hypotheses:  is continuous on the closed interval .  is differentiable on the open interval .  .  Then there is a number in such that . Rolle's theorem    If we remove the restriction that and have to be integers, then this problem becomes a lot more interesting.  It can be shown that for any value , there exist real numbers and that satisfy with . To prove this, one needs to be very careful in evaluating the limit . It is not obvious that this limit goes to infinity. However, if it does, all will have the desired property. It may help to recall that . So, just because the base tends to and the exponent tends to infinity, the value of is not necessarily infinity. limit  limit at infinity  limit definition of e     "
},
{
  "id": "act_sweet_16-4-1",
  "level": "2",
  "url": "act_sweet_16.html#act_sweet_16-4-1",
  "type": "Exercise",
  "number": "1.16.3.1",
  "title": "",
  "body": "  If you rearrange equation to separate variables, you can write the equation as . You can obtain this equivalent equation by taking the natural logarithm of both sides of equation . Then, divide that result by both and . Notice how the equation in this form is set up so that you can apply Rolle's Theorem.     Assign the function in Maple.      Evaluate the derivative of . Notice that is differentiable (and therefore continuous) for all .      Solve for any critical value(s) of where . How many critical values are there? shapes of curves critical number     "
},
{
  "id": "act_sweet_16-4-2",
  "level": "2",
  "url": "act_sweet_16.html#act_sweet_16-4-2",
  "type": "Exercise",
  "number": "1.16.3.2",
  "title": "",
  "body": "  Now you are ready to apply Rolle's Theorem (and a bit of reasoning) to determine if there are any other positive integers and that satisfy equation . There are no calculations to perform in this exercise. Instead, you will need to adequately explain your answers in paragraph form.  Let's begin by assuming that .     If and satisfy equation , then . From what Rolle's Theorem states, what does this tell you about the location of a critical value of where ?      Since you have already found the critical value(s) of , can there be any other positive integers and such that ?    "
},
{
  "id": "act_sweet_16-4-3",
  "level": "2",
  "url": "act_sweet_16.html#act_sweet_16-4-3",
  "type": "Exercise",
  "number": "1.16.3.3",
  "title": "",
  "body": "  What have you concluded about the problem? Are there any other positive integers and ( ) that satisfy equation ?   "
},
{
  "id": "chp_review_differential",
  "level": "1",
  "url": "chp_review_differential.html",
  "type": "Chapter",
  "number": "2",
  "title": "Lab Test Review",
  "body": " Lab Test Review  The following exercises are provided as examples of potential questions on the final lab test at the end of the semester.    The Basics    Evaluate to digits. evalf            Give the numerical value of to digits. evalf            Factor the given cubic to find its roots.  factor            Find the point of intersection of the curves and . Give both the - and -coordinates to digits. solving equations solve            Limits    Find the left- and right-hand limits of at . Does the two-sided limit at exist? Explain. limit one-sided      from the right, from the left. No, the two-sided limit at does not exist because the left and right limits are different.      Consider the function . Evaluate the following limits to digits. limit                               Vertical and Horizontal Asymptotes    Sketch the plot of and state the equations of the vertical and horizontal asymptotes. asymptote     Vertical asymptote: ; Horizontal asymptotes:       Find the horizontal asymptote of . asymptote            The Derivative of a Function    Consider the function . Find all critical numbers of to digits. shapes of curves critical number            Consider the function .     Plot , , and on the same axes. derivative       Find the maximum value of . shapes of curves maximum     Maximum value of at .      Find the maximum value of . shapes of curves maximum     Maximum value of at .       The height in metres of a ball thrown from the top of a building is given by the function .     Find the velocity of the ball at seconds. derivative            At what time does the ball reach its maximum height? shapes of curves critical number      seconds      What is the maximum height of the ball? shapes of curves maximum      metres       Tangent Lines    Given the function , find the equation of the tangent line to at in the form . lines tangent line            Given the function , find the equation of the tangent line to at in the form . lines tangent line            Implicit Functions    Given the Folium of Descartes, , find the slopes of the tangent lines to the curve at . implicit functions            Find all points on the curve where the slope of the tangent line to the curve is equal to . implicit functions     You may need to use the fsolve() command and specify different intervals to find the required points.     , , ,       "
},
{
  "id": "chp_review_differential-3-1-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-1-2",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": "  Evaluate to digits. evalf         "
},
{
  "id": "chp_review_differential-3-1-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-1-3",
  "type": "Exercise",
  "number": "2.2",
  "title": "",
  "body": "  Give the numerical value of to digits. evalf         "
},
{
  "id": "chp_review_differential-3-1-4",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-1-4",
  "type": "Exercise",
  "number": "2.3",
  "title": "",
  "body": "  Factor the given cubic to find its roots.  factor         "
},
{
  "id": "chp_review_differential-3-1-5",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-1-5",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "  Find the point of intersection of the curves and . Give both the - and -coordinates to digits. solving equations solve         "
},
{
  "id": "chp_review_differential-3-2-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-2-2",
  "type": "Exercise",
  "number": "2.5",
  "title": "",
  "body": "  Find the left- and right-hand limits of at . Does the two-sided limit at exist? Explain. limit one-sided      from the right, from the left. No, the two-sided limit at does not exist because the left and right limits are different.   "
},
{
  "id": "chp_review_differential-3-2-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-2-3",
  "type": "Exercise",
  "number": "2.6",
  "title": "",
  "body": "  Consider the function . Evaluate the following limits to digits. limit                            "
},
{
  "id": "chp_review_differential-3-3-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-3-2",
  "type": "Exercise",
  "number": "2.7",
  "title": "",
  "body": "  Sketch the plot of and state the equations of the vertical and horizontal asymptotes. asymptote     Vertical asymptote: ; Horizontal asymptotes:    "
},
{
  "id": "chp_review_differential-3-3-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-3-3",
  "type": "Exercise",
  "number": "2.8",
  "title": "",
  "body": "  Find the horizontal asymptote of . asymptote         "
},
{
  "id": "chp_review_differential-3-4-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-4-2",
  "type": "Exercise",
  "number": "2.9",
  "title": "",
  "body": "  Consider the function . Find all critical numbers of to digits. shapes of curves critical number         "
},
{
  "id": "chp_review_differential-3-4-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-4-3",
  "type": "Exercise",
  "number": "2.10",
  "title": "",
  "body": "  Consider the function .     Plot , , and on the same axes. derivative       Find the maximum value of . shapes of curves maximum     Maximum value of at .      Find the maximum value of . shapes of curves maximum     Maximum value of at .    "
},
{
  "id": "chp_review_differential-3-4-4",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-4-4",
  "type": "Exercise",
  "number": "2.11",
  "title": "",
  "body": "  The height in metres of a ball thrown from the top of a building is given by the function .     Find the velocity of the ball at seconds. derivative            At what time does the ball reach its maximum height? shapes of curves critical number      seconds      What is the maximum height of the ball? shapes of curves maximum      metres    "
},
{
  "id": "chp_review_differential-3-5-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-5-2",
  "type": "Exercise",
  "number": "2.12",
  "title": "",
  "body": "  Given the function , find the equation of the tangent line to at in the form . lines tangent line         "
},
{
  "id": "chp_review_differential-3-5-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-5-3",
  "type": "Exercise",
  "number": "2.13",
  "title": "",
  "body": "  Given the function , find the equation of the tangent line to at in the form . lines tangent line         "
},
{
  "id": "chp_review_differential-3-6-2",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-6-2",
  "type": "Exercise",
  "number": "2.14",
  "title": "",
  "body": "  Given the Folium of Descartes, , find the slopes of the tangent lines to the curve at . implicit functions         "
},
{
  "id": "chp_review_differential-3-6-3",
  "level": "2",
  "url": "chp_review_differential-3.html#chp_review_differential-3-6-3",
  "type": "Exercise",
  "number": "2.15",
  "title": "",
  "body": "  Find all points on the curve where the slope of the tangent line to the curve is equal to . implicit functions     You may need to use the fsolve() command and specify different intervals to find the required points.     , , ,    "
},
{
  "id": "act_riemann_sums_for_monotonic_functions",
  "level": "1",
  "url": "act_riemann_sums_for_monotonic_functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Riemann Sums for Monotonic Functions",
  "body": " Riemann Sums for Monotonic Functions   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  A monotonic function is one that is strictly increasing or strictly decreasing. In this activity, you will use the ApproximateInt() command to visualize and calculate Riemann sums for the area below the function . When analyzing Riemann sums for this function, it is useful to know whether the function is monotonically increasing or decreasing on the specified interval. This is because a right-endpoint or left-endpoint method may reliably give either an overestimate or underestimate of the true area under the curve. integral approximation Riemann sum  integral approximation ApproximateInt   You will need to load the Student[Calculus1] package to use the ApproximateInt() command. You can do with the command with(Student[Calculus1]): in your worksheet. It is typically a good idea to load any necessary packages at the start of your Maple worksheet. If you close and reopen your worksheet, you will need to run the command to load the packages again. packages Student[Calculus1]    integral approximation ApproximateInt!method  integral approximation ApproximateInt!output options       Start by assigning the function using the assignment operator, := .     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=left and output=plot .      Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=right and output=plot .      For a monotonically increasing function on a given interval such as this, which method will always be an underestimate? Which method always gives an overestimate? Provide an answer to these questions in your worksheet, using paragraph (text) mode.      Now suppose a function is monotonically decreasing on a given interval. Which method will always be an underestimate? Which method always gives an overestimate? Provide an answer to these questions in your worksheet.       In this exercise, you will change the output of the ApproximateInt() command to be the numerical value only, without the plot. Evaluate each of the following to 15 digit accuracy.     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=left and output=value . integral approximation ApproximateInt!output options     Don't forget that you can convert an exact value to a decimal using the evalf() command. You can set the accuracy to 15 digits at the top of your worksheet using the command Digits := 15 . Note that the first letter is always capitalized in Digits . evalf  Digits       Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=right and output=value .       In order to find the true area under over the interval , you may express the Riemann sum in terms of an arbitrary number of partitions, , and take the limit as .     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use output=sum and either method=right or method=left .      Evaluate the limit of the sum from part (a) as .       Evaluate the Riemann sum for on the interval using partitions and both left- and right-endpoint methods. Is monotonic on this interval? Is it obvious from a graph which method will result in an overestimate or underestimate of the true area?     "
},
{
  "id": "act_riemann_sums_for_monotonic_functions-4-1",
  "level": "2",
  "url": "act_riemann_sums_for_monotonic_functions.html#act_riemann_sums_for_monotonic_functions-4-1",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "",
  "body": "  Start by assigning the function using the assignment operator, := .     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=left and output=plot .      Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=right and output=plot .      For a monotonically increasing function on a given interval such as this, which method will always be an underestimate? Which method always gives an overestimate? Provide an answer to these questions in your worksheet, using paragraph (text) mode.      Now suppose a function is monotonically decreasing on a given interval. Which method will always be an underestimate? Which method always gives an overestimate? Provide an answer to these questions in your worksheet.    "
},
{
  "id": "act_riemann_sums_for_monotonic_functions-4-2",
  "level": "2",
  "url": "act_riemann_sums_for_monotonic_functions.html#act_riemann_sums_for_monotonic_functions-4-2",
  "type": "Exercise",
  "number": "3.1.3.2",
  "title": "",
  "body": "  In this exercise, you will change the output of the ApproximateInt() command to be the numerical value only, without the plot. Evaluate each of the following to 15 digit accuracy.     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=left and output=value . integral approximation ApproximateInt!output options     Don't forget that you can convert an exact value to a decimal using the evalf() command. You can set the accuracy to 15 digits at the top of your worksheet using the command Digits := 15 . Note that the first letter is always capitalized in Digits . evalf  Digits       Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use the options method=right and output=value .    "
},
{
  "id": "act_riemann_sums_for_monotonic_functions-4-3",
  "level": "2",
  "url": "act_riemann_sums_for_monotonic_functions.html#act_riemann_sums_for_monotonic_functions-4-3",
  "type": "Exercise",
  "number": "3.1.3.3",
  "title": "",
  "body": "  In order to find the true area under over the interval , you may express the Riemann sum in terms of an arbitrary number of partitions, , and take the limit as .     Use the ApproximateInt() command to estimate the area under on the interval with partitions. Use output=sum and either method=right or method=left .      Evaluate the limit of the sum from part (a) as .    "
},
{
  "id": "act_riemann_sums_for_monotonic_functions-4-4",
  "level": "2",
  "url": "act_riemann_sums_for_monotonic_functions.html#act_riemann_sums_for_monotonic_functions-4-4",
  "type": "Exercise",
  "number": "3.1.3.4",
  "title": "",
  "body": "  Evaluate the Riemann sum for on the interval using partitions and both left- and right-endpoint methods. Is monotonic on this interval? Is it obvious from a graph which method will result in an overestimate or underestimate of the true area?   "
},
{
  "id": "act_the_net_change_theorem",
  "level": "1",
  "url": "act_the_net_change_theorem.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Net Change Theorem",
  "body": " The Net Change Theorem   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  The Net Change Theorem states that if a quantity is a differentiable function on the interval , then . integral  integral net change In other words, the Net Change Theorem states that the definite integral of the rate of change of from to is given by the difference in the initial quantity and the final quantity.  We may also be interested in finding the total change of the quantity , given by the integral . integral total change In this case, all area is positive.  We will use Maple's ApproximateInt() command to help visualize the net change and total change of a function on an interval. In addition to the method=left and method=right parameters, we can also use method=upper and method=lower to ensure that our approximation is an overestimate or an underestimate, respectively. integral approximation ApproximateInt  integral approximation ApproximateInt!method   Don't forget that you will need to load the Student[Calculus1] packages Student[Calculus1] package to use the ApproximateInt() command. You can do this by typing with(Student[Calculus1]): at the start of your worksheet.      Assign the function using the assignment operator, := . Plot on the interval .      Use the ApproximateInt() command to estimate the net change of on the interval . Use both method=upper and method=lower , with partitions. integral net change  integral approximation ApproximateInt!method       In this exercise, you will determine the exact value of the net change of on the interval , using a limit of Riemann sums as well as the convenient Int() (or int() ) command.     Use the ApproximateInt() command with method=right and partitions to give the Riemann sum for on the interval . Then, use the limit() command to find the limit of this value as goes to infinity. limit     The ApproximateInt() command will likely only output the net change in summation notation. You may need to force Maple to convert the summation to a closed form before evaluating the limit. To do this, follow up your ApproximateInt() output with a value(%) command before using the limit() command. The ditto operator % is a shortcut that reuses the most recent output. value  ditto operator       Compute by using the Int() command. Verify that this value matches the limit of the Riemann sum in the previous part.    You may use the inert Int() command followed by value(%) (this is typically done on the same input line, with a semicolon between commands) or the int() command, which evaluates the integral immediately.       Use the ApproximateInt() command to estimate the total change of on the interval . Use both method=upper and method=lower , with partitions. integral total change  integral approximation ApproximateInt!method     Recall that the abs() command is used for absolute values in Maple. mathematical functions absolute value       In this exercise, you will determine the exact value of the total change of on the interval , using a limit of Riemann sums as well as the convenient Int() (or int() ) command.     Use the ApproximateInt() command with method=right and partitions to give the Riemann sum for on the interval . Then, use the limit() command to find the limit of this value as goes to infinity. limit     Once again, the ApproximateInt() command will likely only output the total change in summation notation, using an absolute value. In this case, using the value(%) command might not give you a closed form of the summation!  As it turns out, evaluating total change as the limit of Riemann sums over the whole interval might not be the best way to go here. Don't worry if you can't get Maple to do what you want. You'll use the Int() command in a moment! value       Compute by using the Int() (or int() command.      In a couple sentences, describe how you could go about evaluating the total change of on the interval without needing to use the absolute value function.    Consider how the absolute value function acts on in intervals where the function is positive or negative.      "
},
{
  "id": "act_the_net_change_theorem-4-1",
  "level": "2",
  "url": "act_the_net_change_theorem.html#act_the_net_change_theorem-4-1",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": "  Assign the function using the assignment operator, := . Plot on the interval .   "
},
{
  "id": "act_the_net_change_theorem-4-2",
  "level": "2",
  "url": "act_the_net_change_theorem.html#act_the_net_change_theorem-4-2",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": "  Use the ApproximateInt() command to estimate the net change of on the interval . Use both method=upper and method=lower , with partitions. integral net change  integral approximation ApproximateInt!method    "
},
{
  "id": "act_the_net_change_theorem-4-3",
  "level": "2",
  "url": "act_the_net_change_theorem.html#act_the_net_change_theorem-4-3",
  "type": "Exercise",
  "number": "3.2.3.3",
  "title": "",
  "body": "  In this exercise, you will determine the exact value of the net change of on the interval , using a limit of Riemann sums as well as the convenient Int() (or int() ) command.     Use the ApproximateInt() command with method=right and partitions to give the Riemann sum for on the interval . Then, use the limit() command to find the limit of this value as goes to infinity. limit     The ApproximateInt() command will likely only output the net change in summation notation. You may need to force Maple to convert the summation to a closed form before evaluating the limit. To do this, follow up your ApproximateInt() output with a value(%) command before using the limit() command. The ditto operator % is a shortcut that reuses the most recent output. value  ditto operator       Compute by using the Int() command. Verify that this value matches the limit of the Riemann sum in the previous part.    You may use the inert Int() command followed by value(%) (this is typically done on the same input line, with a semicolon between commands) or the int() command, which evaluates the integral immediately.    "
},
{
  "id": "act_the_net_change_theorem-4-4",
  "level": "2",
  "url": "act_the_net_change_theorem.html#act_the_net_change_theorem-4-4",
  "type": "Exercise",
  "number": "3.2.3.4",
  "title": "",
  "body": "  Use the ApproximateInt() command to estimate the total change of on the interval . Use both method=upper and method=lower , with partitions. integral total change  integral approximation ApproximateInt!method     Recall that the abs() command is used for absolute values in Maple. mathematical functions absolute value    "
},
{
  "id": "act_the_net_change_theorem-4-5",
  "level": "2",
  "url": "act_the_net_change_theorem.html#act_the_net_change_theorem-4-5",
  "type": "Exercise",
  "number": "3.2.3.5",
  "title": "",
  "body": "  In this exercise, you will determine the exact value of the total change of on the interval , using a limit of Riemann sums as well as the convenient Int() (or int() ) command.     Use the ApproximateInt() command with method=right and partitions to give the Riemann sum for on the interval . Then, use the limit() command to find the limit of this value as goes to infinity. limit     Once again, the ApproximateInt() command will likely only output the total change in summation notation, using an absolute value. In this case, using the value(%) command might not give you a closed form of the summation!  As it turns out, evaluating total change as the limit of Riemann sums over the whole interval might not be the best way to go here. Don't worry if you can't get Maple to do what you want. You'll use the Int() command in a moment! value       Compute by using the Int() (or int() command.      In a couple sentences, describe how you could go about evaluating the total change of on the interval without needing to use the absolute value function.    Consider how the absolute value function acts on in intervals where the function is positive or negative.    "
},
{
  "id": "act_approximate_integration",
  "level": "1",
  "url": "act_approximate_integration.html",
  "type": "Section",
  "number": "3.3",
  "title": "Other Integral Approximation Techniques",
  "body": " Other Integral Approximation Techniques   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  The trapezoid rule, the midpoint rule, and Simpson's rule are all useful numerical methods for approximating a definite integral of a function on a finite interval. Maple's ApproximateInt() command supports each of these techniques, which can be specified by setting the optional method parameter to the desired option.  Each of these techniques will have some associated error with its approximation, measured as the difference between the approximated numerical value and the actual value of the definite integral. For any particular function , it is possible to calculate the largest error (an upper bound) in its approximation for a finite number of subintervals, . In particular: Each error bound calculation relies on the width of the interval , the number of subintervals , and the shape of the function (the second or fourth derivative) on the interval.  In this activity, you will use Maple's ApproximateInt() command to help visualize these three approximation methods and then calculate the error bounds associated with them. integral approximation ApproximateInt       Assign using the assignment operator, := , and plot it over the interval .    Don't forget that the exp() function is used for . You cannot use the letter e on the keyboard for the exponential function. However, you can find in the palettes toolbar.      In this exercise, you will use the trapezoid rule to estimate . Use the ApproximateInt() command with method=trapezoid and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition      Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .       In this exercise, you will use the midpoint rule to estimate . Use the ApproximateInt() command with method=midpoint and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition      Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .       In this exercise, you will use Simpson's rule to estimate . Use the ApproximateInt() command with method=simpson and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition   Note that while partition=4 , Simpson's rule uses twice as many subintervals, so for error calculations, .     Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .       In this exercise, you will determine the error bounds for the trapezoid and midpoint approximations you obtained in exercises 2 and 3. Both of these error bound calculations depend on the maximum value of over the interval. You may need to recall some knowledge of critical values and extreme values on a closed interval to complete this exercise. integral approximation error      Plot over the interval and notice that the maximum value of occurs at a critical number of .      Find the critical number of by solving for . Evaluate at this -value to determine the value of that is used in formulas and .      Compute the upper bound for using formula .      Compute the upper bound for using formula .       In this exercise, you will determine the error bound for the approximation you obtained in exercise 4 using Simpson's rule. This error bound calculation depends on the maximum value of over the interval. Also note that partition=4 actually correponds to , since there is an additional sample point in each partition, resulting in twice as many subintervals. integral approximation error      Plot over the interval and notice that the maximum value of occurs at one of the two endpoints of the interval.      Evaluate at the -value of this endpoint where it reaches a maximum. This gives the value of in the error formula .      Compute the upper bound for using formula .    Don't forget that when using partition=4 .      "
},
{
  "id": "act_approximate_integration-4-1",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-1",
  "type": "Exercise",
  "number": "3.3.3.1",
  "title": "",
  "body": "  Assign using the assignment operator, := , and plot it over the interval .    Don't forget that the exp() function is used for . You cannot use the letter e on the keyboard for the exponential function. However, you can find in the palettes toolbar.   "
},
{
  "id": "act_approximate_integration-4-2",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-2",
  "type": "Exercise",
  "number": "3.3.3.2",
  "title": "",
  "body": "  In this exercise, you will use the trapezoid rule to estimate . Use the ApproximateInt() command with method=trapezoid and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition      Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .    "
},
{
  "id": "act_approximate_integration-4-3",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-3",
  "type": "Exercise",
  "number": "3.3.3.3",
  "title": "",
  "body": "  In this exercise, you will use the midpoint rule to estimate . Use the ApproximateInt() command with method=midpoint and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition      Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .    "
},
{
  "id": "act_approximate_integration-4-4",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-4",
  "type": "Exercise",
  "number": "3.3.3.4",
  "title": "",
  "body": "  In this exercise, you will use Simpson's rule to estimate . Use the ApproximateInt() command with method=simpson and partition=4 over the interval in each of the following steps. integral approximation ApproximateInt!method  integral approximation ApproximateInt!partition   Note that while partition=4 , Simpson's rule uses twice as many subintervals, so for error calculations, .     Display this approximation using output=plot . integral approximation ApproximateInt!output options       Display the sum for this approximation using output=sum .      Approximate the value of the definite integral using output=value .    "
},
{
  "id": "act_approximate_integration-4-5",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-5",
  "type": "Exercise",
  "number": "3.3.3.5",
  "title": "",
  "body": "  In this exercise, you will determine the error bounds for the trapezoid and midpoint approximations you obtained in exercises 2 and 3. Both of these error bound calculations depend on the maximum value of over the interval. You may need to recall some knowledge of critical values and extreme values on a closed interval to complete this exercise. integral approximation error      Plot over the interval and notice that the maximum value of occurs at a critical number of .      Find the critical number of by solving for . Evaluate at this -value to determine the value of that is used in formulas and .      Compute the upper bound for using formula .      Compute the upper bound for using formula .    "
},
{
  "id": "act_approximate_integration-4-6",
  "level": "2",
  "url": "act_approximate_integration.html#act_approximate_integration-4-6",
  "type": "Exercise",
  "number": "3.3.3.6",
  "title": "",
  "body": "  In this exercise, you will determine the error bound for the approximation you obtained in exercise 4 using Simpson's rule. This error bound calculation depends on the maximum value of over the interval. Also note that partition=4 actually correponds to , since there is an additional sample point in each partition, resulting in twice as many subintervals. integral approximation error      Plot over the interval and notice that the maximum value of occurs at one of the two endpoints of the interval.      Evaluate at the -value of this endpoint where it reaches a maximum. This gives the value of in the error formula .      Compute the upper bound for using formula .    Don't forget that when using partition=4 .    "
},
{
  "id": "act_shapes_of_integral_functions",
  "level": "1",
  "url": "act_shapes_of_integral_functions.html",
  "type": "Section",
  "number": "3.4",
  "title": "Describing the Shapes of Integral Functions",
  "body": " Describing the Shapes of Integral Functions   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:           Introduction  In this activity, we will examine two functions that are defined by integrals, in the form . integral We may view these integral functions as the accumulated area under a function over an interval from to , where is the variable of the function . Integral functions frequently appear in analysis and in differential equations. Determining critical points and inflection points of integral functions is incredibly important in the analysis of these types of problems.   Recall that a critical point of a function occurs when or when does not exist. shapes of curves critical number   An inflection point of is a point at which the concavity of changes. shapes of curves inflection point        The sine integral function is important in electrical engineering. Note that by defining in the piecewise definition above, is a continuous function. mathematical functions piecewise    By the Fundamental Theorem of Calculus, , where . Known as the function, this is used in signal processing and the theory of Fourier transforms.      The sine integral function is already defined in Maple, so you don't have to manually assign it. Plot the graph of over the interval . plot       On the graph of , you will notice that there are many local minimum and maximum values. Use the fsolve() command to find the critical numbers of corresponding to the location of the absolute minimum and maximum values. shapes of curves critical number  shapes of curves minimum  shapes of curves maximum     When you use the fsolve() solving equations fsolve command, you can specify an interval in which you wish to search for solutions. An example of this can be found in .      What are the absolute minimum and maximum values of ?      There is an inflection point just to the right of the absolute maximum value. Use the second derivative and the fsolve() command to find its location. shapes of curves inflection point  solving equations fsolve       Use the limit() command to find the horizontal asymptote(s) of . limit  asymptote horizontal     Recall that if and is finite, then is a horizontal asymptote of .       Assign the integral function using the assignment operator, := . integral      Plot the integral function, . Try to specify a plot interval that gives you a good idea of the shape of . plot       Use the second derivative, , to determine where is concave up and where is concave down. derivative     You may make use of the factor() or solve() commands to help determine where equals zero or is undefined. From there, your graph may help determine where is positive or negative.      Determine the inflection points of . shapes of curves inflection point       "
},
{
  "id": "act_shapes_of_integral_functions-4-1",
  "level": "2",
  "url": "act_shapes_of_integral_functions.html#act_shapes_of_integral_functions-4-1",
  "type": "Exercise",
  "number": "3.4.3.1",
  "title": "",
  "body": "  The sine integral function is important in electrical engineering. Note that by defining in the piecewise definition above, is a continuous function. mathematical functions piecewise    By the Fundamental Theorem of Calculus, , where . Known as the function, this is used in signal processing and the theory of Fourier transforms.      The sine integral function is already defined in Maple, so you don't have to manually assign it. Plot the graph of over the interval . plot       On the graph of , you will notice that there are many local minimum and maximum values. Use the fsolve() command to find the critical numbers of corresponding to the location of the absolute minimum and maximum values. shapes of curves critical number  shapes of curves minimum  shapes of curves maximum     When you use the fsolve() solving equations fsolve command, you can specify an interval in which you wish to search for solutions. An example of this can be found in .      What are the absolute minimum and maximum values of ?      There is an inflection point just to the right of the absolute maximum value. Use the second derivative and the fsolve() command to find its location. shapes of curves inflection point  solving equations fsolve       Use the limit() command to find the horizontal asymptote(s) of . limit  asymptote horizontal     Recall that if and is finite, then is a horizontal asymptote of .    "
},
{
  "id": "act_shapes_of_integral_functions-4-2",
  "level": "2",
  "url": "act_shapes_of_integral_functions.html#act_shapes_of_integral_functions-4-2",
  "type": "Exercise",
  "number": "3.4.3.2",
  "title": "",
  "body": "  Assign the integral function using the assignment operator, := . integral      Plot the integral function, . Try to specify a plot interval that gives you a good idea of the shape of . plot       Use the second derivative, , to determine where is concave up and where is concave down. derivative     You may make use of the factor() or solve() commands to help determine where equals zero or is undefined. From there, your graph may help determine where is positive or negative.      Determine the inflection points of . shapes of curves inflection point     "
},
{
  "id": "act_applications_of_ftc",
  "level": "1",
  "url": "act_applications_of_ftc.html",
  "type": "Section",
  "number": "3.5",
  "title": "Applications of the Fundamental Theorem of Calculus",
  "body": " Applications of the Fundamental Theorem of Calculus   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:          Introduction  In this activity, you will need to make use of the Fundamental Theorem of Calculus in order to solve two applied problems. In particular, you will need to use the result .      In this exercise, your goal is to evaluate a challenging limit problem: . Start by assigning the function using the assignment operator, := . integral  limit    L'Hôpital's Rule states that if the limit is indeterminate of the form or , if and are differentiable at , and if near , then , assuming that this limit exists.      Try visualizing the problem by plotting the graph of over the interval . See if you can estimate from the plot. plot       The integral function in the numerator is what makes this limit problem so challenging. Try evaluating using the int() command or Int() and value(%) commands. Notice how Maple evaluates the integral, but not in terms of elementary functions.    There is no easy integration technique for this integral. You'll notice that Maple evaluates the integral in terms of the Fresnel S function, a transcendental function named after Augustin-Jean Fresnel.      Luckily, you should not need to evaluate this integral in order to evaluate the limit. Instead, you may apply l'Hôpital's rule, so long as the limit is indeterminate of the form or . Which of these two indeterminate forms is applicable? limit l'Hôpital       Applying l'Hôpital's rule to the limit allows you to differentiate the numerator and denominator and obtain a new expression for the limit as . Use the diff() command to differentiate the numerator and denominator of and see how the Fundamental Theorem of Calculus is applied.    You can differentiate the numerator of by using the numer() function:   diff(numer(s(x)), x);   Similarly, you can differentiate the denominator of using the denom() function.  Try making a new fraction using both of these functions together.      You should have noticed that the new limit after applying l'Hôpital's rule is indeterminate of the form . Try applying l'Hôpital's rule again, this time finding the second derivatives of the numerator and denominator.    You can find the second derivative of the numerator of using   diff(numer(s(x)), x, x);   and switching to denom() for the denominator.      After applying l'Hôpital's rule twice, you should be able to evaluate the limit. Confirm your answer by using the limit() command to evaluate .       In this exercise, your goal is to solve for a function and for a number that satisfy the equation . Start by assigning equation to a name of your choice, such as eqn .   The diff() command can be used to differentiate an equation with respect to an independent variable. derivative diff       To solve for the function , you can differentiate both sides of the equation and apply the FTC. Use the diff() command on your equation to differentiate both sides. Then, solve for using the solve() command. solving equations solve       Substitute the solution for into equation and assign it to a new name, such as eqn2 .    Make sure that you are using as the variable in the integrand when substituting your solution for .      Evaluate the integral in the equation and solve for using the solve() command. solving equations solve       "
},
{
  "id": "act_applications_of_ftc-4-1",
  "level": "2",
  "url": "act_applications_of_ftc.html#act_applications_of_ftc-4-1",
  "type": "Exercise",
  "number": "3.5.3.1",
  "title": "",
  "body": "  In this exercise, your goal is to evaluate a challenging limit problem: . Start by assigning the function using the assignment operator, := . integral  limit    L'Hôpital's Rule states that if the limit is indeterminate of the form or , if and are differentiable at , and if near , then , assuming that this limit exists.      Try visualizing the problem by plotting the graph of over the interval . See if you can estimate from the plot. plot       The integral function in the numerator is what makes this limit problem so challenging. Try evaluating using the int() command or Int() and value(%) commands. Notice how Maple evaluates the integral, but not in terms of elementary functions.    There is no easy integration technique for this integral. You'll notice that Maple evaluates the integral in terms of the Fresnel S function, a transcendental function named after Augustin-Jean Fresnel.      Luckily, you should not need to evaluate this integral in order to evaluate the limit. Instead, you may apply l'Hôpital's rule, so long as the limit is indeterminate of the form or . Which of these two indeterminate forms is applicable? limit l'Hôpital       Applying l'Hôpital's rule to the limit allows you to differentiate the numerator and denominator and obtain a new expression for the limit as . Use the diff() command to differentiate the numerator and denominator of and see how the Fundamental Theorem of Calculus is applied.    You can differentiate the numerator of by using the numer() function:   diff(numer(s(x)), x);   Similarly, you can differentiate the denominator of using the denom() function.  Try making a new fraction using both of these functions together.      You should have noticed that the new limit after applying l'Hôpital's rule is indeterminate of the form . Try applying l'Hôpital's rule again, this time finding the second derivatives of the numerator and denominator.    You can find the second derivative of the numerator of using   diff(numer(s(x)), x, x);   and switching to denom() for the denominator.      After applying l'Hôpital's rule twice, you should be able to evaluate the limit. Confirm your answer by using the limit() command to evaluate .    "
},
{
  "id": "act_applications_of_ftc-4-2",
  "level": "2",
  "url": "act_applications_of_ftc.html#act_applications_of_ftc-4-2",
  "type": "Exercise",
  "number": "3.5.3.2",
  "title": "",
  "body": "  In this exercise, your goal is to solve for a function and for a number that satisfy the equation . Start by assigning equation to a name of your choice, such as eqn .   The diff() command can be used to differentiate an equation with respect to an independent variable. derivative diff       To solve for the function , you can differentiate both sides of the equation and apply the FTC. Use the diff() command on your equation to differentiate both sides. Then, solve for using the solve() command. solving equations solve       Substitute the solution for into equation and assign it to a new name, such as eqn2 .    Make sure that you are using as the variable in the integrand when substituting your solution for .      Evaluate the integral in the equation and solve for using the solve() command. solving equations solve     "
},
{
  "id": "act_average_value_of_function",
  "level": "1",
  "url": "act_average_value_of_function.html",
  "type": "Section",
  "number": "3.6",
  "title": "Average Value of a Function on a Shrinking Interval",
  "body": " Average Value of a Function on a Shrinking Interval   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  The average value of a function average value of a function  on the interval is defined as . average value of a function In this activity, we will investigate the function over a shrinking interval where is fixed and approaches . To do this, we can let and take the limit as . Specifically, we will determine the value of the integral . For convenience, we can view as a function of . This function gives the average value of over the interval .  In this activity, you will ultimately need to determine the limit of as .      In this exercise, you will use function defined in equation to determine and visualize the average value of over the interval .     Start by assigning and the function given in equation using the assignment operator, := .    The function can also be defined as , assuming that you have assigned in Maple first. Note that you should use as the independent variable of this function.      Use the function to find the average value of on the interval . average value of a function       Plot and on the same axes over the interval . Does appear to be the average value of on the interval ? plot        Try to determine the average value of as the interval width shrinks to zero ( ) graphically. Plot over the interval and estimate the value from your graph.      In this exercise, you will determine the value the limit analytically, using Maple to assist with methods that you would otherwise use on paper.     Try evaluating the integral using the int() command or Int() and value(%) commands. Notice how Maple evaluates the integral, but not in terms of elementary functions.   L'Hôpital's Rule states that if the limit is indeterminate of the form or , if and are differentiable at , and if near , then , assuming that this limit exists.     There is no easy integration technique for this integral. You'll notice that Maple evaluates the integral in terms of the Elliptic F function, a transcendental function.      Luckily, you should not need to evaluate this integral in order to evaluate the limit. Instead, you may apply l'Hôpital's rule, so long as the limit is indeterminate of the form or . Which of these two indeterminate forms is applicable? limit l'Hôpital       Applying l'Hôpital's rule to the limit results in . Obviously in the denominator, but you will need to apply the Fundamental Theorem of Calculus for the numerator. Use the diff() command to evaluate and see how the Fundamental Theorem of Calculus is applied.      Using this result, determine on your own.       Finally, it's time to let Maple evaluate this limit, letting the power of the limit() command and the Limit Methods tutor do all the work.     Check your answer to question by using the limit() command to evaluate . limit       Use the Limit Methods tutor to evaluate to see how l'Hôpital's Rule is applied, along with a variety of limit laws. limit l'Hôpital  limit tutor     After opening the Limit Methods tutor, you can simply type for the function. Just don't forget to change the variable to !      "
},
{
  "id": "act_average_value_of_function-4-1",
  "level": "2",
  "url": "act_average_value_of_function.html#act_average_value_of_function-4-1",
  "type": "Exercise",
  "number": "3.6.3.1",
  "title": "",
  "body": "  In this exercise, you will use function defined in equation to determine and visualize the average value of over the interval .     Start by assigning and the function given in equation using the assignment operator, := .    The function can also be defined as , assuming that you have assigned in Maple first. Note that you should use as the independent variable of this function.      Use the function to find the average value of on the interval . average value of a function       Plot and on the same axes over the interval . Does appear to be the average value of on the interval ? plot     "
},
{
  "id": "act_average_value_of_function-4-2",
  "level": "2",
  "url": "act_average_value_of_function.html#act_average_value_of_function-4-2",
  "type": "Exercise",
  "number": "3.6.3.2",
  "title": "",
  "body": "  Try to determine the average value of as the interval width shrinks to zero ( ) graphically. Plot over the interval and estimate the value from your graph.   "
},
{
  "id": "ex_average_value_limit",
  "level": "2",
  "url": "act_average_value_of_function.html#ex_average_value_limit",
  "type": "Exercise",
  "number": "3.6.3.3",
  "title": "",
  "body": "  In this exercise, you will determine the value the limit analytically, using Maple to assist with methods that you would otherwise use on paper.     Try evaluating the integral using the int() command or Int() and value(%) commands. Notice how Maple evaluates the integral, but not in terms of elementary functions.   L'Hôpital's Rule states that if the limit is indeterminate of the form or , if and are differentiable at , and if near , then , assuming that this limit exists.     There is no easy integration technique for this integral. You'll notice that Maple evaluates the integral in terms of the Elliptic F function, a transcendental function.      Luckily, you should not need to evaluate this integral in order to evaluate the limit. Instead, you may apply l'Hôpital's rule, so long as the limit is indeterminate of the form or . Which of these two indeterminate forms is applicable? limit l'Hôpital       Applying l'Hôpital's rule to the limit results in . Obviously in the denominator, but you will need to apply the Fundamental Theorem of Calculus for the numerator. Use the diff() command to evaluate and see how the Fundamental Theorem of Calculus is applied.      Using this result, determine on your own.    "
},
{
  "id": "act_average_value_of_function-4-4",
  "level": "2",
  "url": "act_average_value_of_function.html#act_average_value_of_function-4-4",
  "type": "Exercise",
  "number": "3.6.3.4",
  "title": "",
  "body": "  Finally, it's time to let Maple evaluate this limit, letting the power of the limit() command and the Limit Methods tutor do all the work.     Check your answer to question by using the limit() command to evaluate . limit       Use the Limit Methods tutor to evaluate to see how l'Hôpital's Rule is applied, along with a variety of limit laws. limit l'Hôpital  limit tutor     After opening the Limit Methods tutor, you can simply type for the function. Just don't forget to change the variable to !    "
},
{
  "id": "act_shark_attack",
  "level": "1",
  "url": "act_shark_attack.html",
  "type": "Section",
  "number": "3.7",
  "title": "Shark Attack",
  "body": " Shark Attack   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  In this activity, you will determine whether you can swim to safety before a shark attacks. You will need to use piecewise functions and the Net Change Theorem to find the outcome.  Suppose that you are surfing on the ocean and there is a shark 50 metres behind you, at rest (i.e. ).  The shark senses you and begins accelerating toward you at a rate of 5 m\/s , up to a top speed of 13 m\/s. You see the shark coming and begin swimming towards shore at a speed of 2 m\/s. Assume there is no time needed for you to accelerate up to your top speed. If the shore is 20 m away from you (and 70 m away from the shark), do you make it to shore before the shark attacks?   An illustration of the shark trying to catch you as you swim to shore.      For convenience, we will let the shark's initial position be m and your initial position be m. This means that the shore is at a position of m.      In this exercise, you will create a function that gives the position of the shark at time , relative to its initial position.     Calculate by hand or using Maple how long it takes for the shark to reach its top speed of 13 m\/s if it accelerates at 5 m\/s . Assign this time to t1 . Note that the shark will no longer accelerate after seconds, since it has reached its top speed.   The shark's velocity function will contain an acceleration term for (where is the time you find in exercise ) but will not have an acceleration term after seconds.       Define a piecewise function for the shark's velocity using the piecewise() command and assign this to sharkvelocity(t) . This velocity function should be linearly increasing for while the shark accelerates and then constant for . mathematical functions piecewise     You can read how to define piecewise functions in .    The shark's velocity function should look similar to the graph below.         Integrate with respect to to find the position function for the shark. Assign this piecewise position function to something like sharkposition(t) .       Since your swim velocity is constant, determining your position function is much simpler. Assign the function and integrate with respect to to find your displacement function (the net change from your initial position). Add 50 to this displacement function for your initial position and assign it to swimposition(t) .      It's time to see if you can swim to the shore before the shark catches up to you!     Plot the position functions for you and the shark on the same graph. Adjust your plot axes so that you can see the moment that the shark catches up to you.    You may wish to specify colours for each function so that you can tell which function is which.      Determine the time that the shark catches up to you. Solve for when the position function of the shark is equal to your position function. solving equations solve  solving equations fsolve     In this question, you are solving for time, . You can try using the solve() command first, and then change it to fsolve() if necessary.      Evaluate the shark's position function at this time to determine the position of the shark when it will catch you. Will you make it to the shore safely?       Instead of swimming, let's suppose you hop on your board and surf the nearest wave away towards the shore. You are initially at rest, but due to the wave, you accelerate at m\/s until you reach a top speed of m\/s.     Define a new piecewise function for the velocity of surfing the wave and assign it to .    The piecewise function for your surfing velocity will be similar to the one you set up for the shark in .      Repeating the steps from a previous exercise, determine the position of the shark when it will catch you. Will you make it to the shore safely?      "
},
{
  "id": "fig_shark_attack",
  "level": "2",
  "url": "act_shark_attack.html#fig_shark_attack",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " An illustration of the shark trying to catch you as you swim to shore.     "
},
{
  "id": "act_shark_attack-4-1",
  "level": "2",
  "url": "act_shark_attack.html#act_shark_attack-4-1",
  "type": "Exercise",
  "number": "3.7.3.1",
  "title": "",
  "body": "  In this exercise, you will create a function that gives the position of the shark at time , relative to its initial position.     Calculate by hand or using Maple how long it takes for the shark to reach its top speed of 13 m\/s if it accelerates at 5 m\/s . Assign this time to t1 . Note that the shark will no longer accelerate after seconds, since it has reached its top speed.   The shark's velocity function will contain an acceleration term for (where is the time you find in exercise ) but will not have an acceleration term after seconds.       Define a piecewise function for the shark's velocity using the piecewise() command and assign this to sharkvelocity(t) . This velocity function should be linearly increasing for while the shark accelerates and then constant for . mathematical functions piecewise     You can read how to define piecewise functions in .    The shark's velocity function should look similar to the graph below.         Integrate with respect to to find the position function for the shark. Assign this piecewise position function to something like sharkposition(t) .    "
},
{
  "id": "act_shark_attack-4-2",
  "level": "2",
  "url": "act_shark_attack.html#act_shark_attack-4-2",
  "type": "Exercise",
  "number": "3.7.3.2",
  "title": "",
  "body": "  Since your swim velocity is constant, determining your position function is much simpler. Assign the function and integrate with respect to to find your displacement function (the net change from your initial position). Add 50 to this displacement function for your initial position and assign it to swimposition(t) .   "
},
{
  "id": "act_shark_attack-4-3",
  "level": "2",
  "url": "act_shark_attack.html#act_shark_attack-4-3",
  "type": "Exercise",
  "number": "3.7.3.3",
  "title": "",
  "body": "  It's time to see if you can swim to the shore before the shark catches up to you!     Plot the position functions for you and the shark on the same graph. Adjust your plot axes so that you can see the moment that the shark catches up to you.    You may wish to specify colours for each function so that you can tell which function is which.      Determine the time that the shark catches up to you. Solve for when the position function of the shark is equal to your position function. solving equations solve  solving equations fsolve     In this question, you are solving for time, . You can try using the solve() command first, and then change it to fsolve() if necessary.      Evaluate the shark's position function at this time to determine the position of the shark when it will catch you. Will you make it to the shore safely?    "
},
{
  "id": "act_shark_attack-4-4",
  "level": "2",
  "url": "act_shark_attack.html#act_shark_attack-4-4",
  "type": "Exercise",
  "number": "3.7.3.4",
  "title": "",
  "body": "  Instead of swimming, let's suppose you hop on your board and surf the nearest wave away towards the shore. You are initially at rest, but due to the wave, you accelerate at m\/s until you reach a top speed of m\/s.     Define a new piecewise function for the velocity of surfing the wave and assign it to .    The piecewise function for your surfing velocity will be similar to the one you set up for the shark in .      Repeating the steps from a previous exercise, determine the position of the shark when it will catch you. Will you make it to the shore safely?    "
},
{
  "id": "act_areas_between_curves",
  "level": "1",
  "url": "act_areas_between_curves.html",
  "type": "Section",
  "number": "3.8",
  "title": "Areas Between Curves",
  "body": " Areas Between Curves   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  Consider two functions, and . We can find the total area between these two curves over an interval by integrating the absolute value of the difference between these two functions. In other words, . integral total area If over that interval, then the absolute value can be dropped. However, if over that interval, then the absolute value can be dropped and the order of subtraction reversed.   If for some subintervals of and for other subintervals of , then the integral must be split into these subintervals to handle the absolute value accordingly. This process typically involves having to solve for the intersection points of the functions. However, Maple handles this process automatically.   In other circumstances, we may be interested in the net area between and . For example, if and both represent rates of change of some quantity, then the net area will give us the net difference between the two quantities over an interval. The net area may be negative, while the total area will always be positive. integral net area       In this exercise, you will find the area of the region bounded by the curves and ultimately, determine the value of that gives an exact area of 576.     To begin, you should view the region between the two curves and determine how the intersection points depend on the value of . Create a plot of and using your choice of nonzero and adjust the view as necessary to the -coordinates of the two points of intersection.    Maple will not be able to plot these two curves on the -plane without substituting in some value of , since would be viewed as an unexpected third variable in the equation of each curve.    You should not assign a value to while making these plots. You will need to leave as an unknown value for this exercise.      Repeat the steps in the previous part for multiple different nonzero values for .      Use the solve() (or fsolve() ) command to find the -coordinates of the two intersection points of and . These -coordinates should be dependent on . solving equations solve       Set up an equation where the integral giving the area between and is equal to 576 and solve the equation for using the solve() (or fsolve() ) command. solving equations solve  solving equations fsolve     The integral may be set up using the int() or Int() command.       Suppose that two runners are competing in a two-minute sprint. After seconds, the velocity of runner A is given by and the velocity of runner B is given by . Both velocities are in m\/s. Start by assigning each of these functions, using the assignment operator, := .   Since velocity is a rate of change of position, integrating velocity over an interval of time gives the net change in position, called displacement. Integrating the difference of two velocity functions gives the net difference between the two displacements.      Plot both velocity functions on the same axes for a duration of minutes (use , since is in seconds). Using your graph, try to guess which runner makes it the farthest distance in minutes.    Make sure that you defined the exponential function properly in the two velocity functions. You can use the exp() function for or use the palettes toolbar. You cannot use the letter e on the keyboard for the exponential function. mathematical functions exponential     It is a good idea to choose colours for each function so that you can tell them apart on your plot.      Find the net area between and on the interval . This corresponds to the net difference in displacement during the race. Which runner made it the farthest distance in minutes? By how many metres?      "
},
{
  "id": "act_areas_between_curves-4-1",
  "level": "2",
  "url": "act_areas_between_curves.html#act_areas_between_curves-4-1",
  "type": "Exercise",
  "number": "3.8.3.1",
  "title": "",
  "body": "  In this exercise, you will find the area of the region bounded by the curves and ultimately, determine the value of that gives an exact area of 576.     To begin, you should view the region between the two curves and determine how the intersection points depend on the value of . Create a plot of and using your choice of nonzero and adjust the view as necessary to the -coordinates of the two points of intersection.    Maple will not be able to plot these two curves on the -plane without substituting in some value of , since would be viewed as an unexpected third variable in the equation of each curve.    You should not assign a value to while making these plots. You will need to leave as an unknown value for this exercise.      Repeat the steps in the previous part for multiple different nonzero values for .      Use the solve() (or fsolve() ) command to find the -coordinates of the two intersection points of and . These -coordinates should be dependent on . solving equations solve       Set up an equation where the integral giving the area between and is equal to 576 and solve the equation for using the solve() (or fsolve() ) command. solving equations solve  solving equations fsolve     The integral may be set up using the int() or Int() command.    "
},
{
  "id": "act_areas_between_curves-4-2",
  "level": "2",
  "url": "act_areas_between_curves.html#act_areas_between_curves-4-2",
  "type": "Exercise",
  "number": "3.8.3.2",
  "title": "",
  "body": "  Suppose that two runners are competing in a two-minute sprint. After seconds, the velocity of runner A is given by and the velocity of runner B is given by . Both velocities are in m\/s. Start by assigning each of these functions, using the assignment operator, := .   Since velocity is a rate of change of position, integrating velocity over an interval of time gives the net change in position, called displacement. Integrating the difference of two velocity functions gives the net difference between the two displacements.      Plot both velocity functions on the same axes for a duration of minutes (use , since is in seconds). Using your graph, try to guess which runner makes it the farthest distance in minutes.    Make sure that you defined the exponential function properly in the two velocity functions. You can use the exp() function for or use the palettes toolbar. You cannot use the letter e on the keyboard for the exponential function. mathematical functions exponential     It is a good idea to choose colours for each function so that you can tell them apart on your plot.      Find the net area between and on the interval . This corresponds to the net difference in displacement during the race. Which runner made it the farthest distance in minutes? By how many metres?    "
},
{
  "id": "act_volumes_of_revolution",
  "level": "1",
  "url": "act_volumes_of_revolution.html",
  "type": "Section",
  "number": "3.9",
  "title": "Volumes of Revolution",
  "body": " Volumes of Revolution   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:          Introduction  Volumes of revolution are often very challenging to visualize on paper. Luckily, Maple has an interactive way of visualizing the volume obtained by revolving a region about a central axis. In this activity, we will use the Volume of Revolution Tutor to find and plot the volume of a region rotated about a vertical axis or horizontal axis.  The Volume of Revolution tutor is able to determine the volume of the solid obtained by revolution using either the disks\/washers method or the method of cylindrical shells. You can learn more about how to access and use this tutor in .      In the first three exercises of this activity, you will be working with the region bounded by the functions and , where .     Assign these two functions in Maple using the assignment operator, := .      Plot the graphs of and on the same set of axes to view the region that you will be revolving about an axis in the next couple exercises. plot       As you can see from your plot, the functions intersect at and at another value where . Solve for this second value, , where the functions intersect and assign it to x2 .    An example of finding intersection points is given .       In this exercise, you will determine the volume of the solid obtained by revolving the region between the curves and (with ) around the horizontal line .     Using the int() command or Int() and value(%) commands, calculate the volume of revolution using the washer method.      Use the Volume of Revolution tutor to plot the solid and confirm your answer in part (a).       In this exercise, you will determine the volume of the solid obtained by revolving the region between the curves and (with ) around the vertical line .     (Optional) If you are familiar with the method of cylindrical shells, use this method to calculate the volume of the solid using the int() command or Int() and value(%) commands      Use the Volume of Revolution tutor to calculate the volume of the solid. Before closing the tutor, copy the text at the bottom (in the Maple Command box).      Paste this command onto a new line and change 'output'=plot to 'output'=value to output the volume of the resulting solid. volume of revolution VolumeOfRevolution  volume of revolution VolumeOfRevolution!output options     You will need to include the Student[Calculus1] package by typing with(Student[Calculus1]): on a new line before the VolumeOfRevolution() command will work.       Suppose you want to find the volume of an egg that has an elliptical shape defined in the -plane by .     Plot the curve using the implicitplot() command.    Don't forget to include the plots package before using implicitplot() . packages plots     When plotting the ellipse, it may initially look like a circle. This is because Maple does not use the same scaling for each axis. Try clicking on the plot and using the button in the top menu.      Solve the equation of the curve for to get the equations of the top and bottom halves of the ellipse.      Find the -intercepts of this ellipse.      Use the Volume of Revolution tutor or your choice of either the int() or Int() commands to calculate the volume of the solid obtained by revolving the top half of the ellipse about the -axis. integral Int  integral int       "
},
{
  "id": "act_volumes_of_revolution-4-1",
  "level": "2",
  "url": "act_volumes_of_revolution.html#act_volumes_of_revolution-4-1",
  "type": "Exercise",
  "number": "3.9.3.1",
  "title": "",
  "body": "  In the first three exercises of this activity, you will be working with the region bounded by the functions and , where .     Assign these two functions in Maple using the assignment operator, := .      Plot the graphs of and on the same set of axes to view the region that you will be revolving about an axis in the next couple exercises. plot       As you can see from your plot, the functions intersect at and at another value where . Solve for this second value, , where the functions intersect and assign it to x2 .    An example of finding intersection points is given .    "
},
{
  "id": "act_volumes_of_revolution-4-2",
  "level": "2",
  "url": "act_volumes_of_revolution.html#act_volumes_of_revolution-4-2",
  "type": "Exercise",
  "number": "3.9.3.2",
  "title": "",
  "body": "  In this exercise, you will determine the volume of the solid obtained by revolving the region between the curves and (with ) around the horizontal line .     Using the int() command or Int() and value(%) commands, calculate the volume of revolution using the washer method.      Use the Volume of Revolution tutor to plot the solid and confirm your answer in part (a).    "
},
{
  "id": "act_volumes_of_revolution-4-3",
  "level": "2",
  "url": "act_volumes_of_revolution.html#act_volumes_of_revolution-4-3",
  "type": "Exercise",
  "number": "3.9.3.3",
  "title": "",
  "body": "  In this exercise, you will determine the volume of the solid obtained by revolving the region between the curves and (with ) around the vertical line .     (Optional) If you are familiar with the method of cylindrical shells, use this method to calculate the volume of the solid using the int() command or Int() and value(%) commands      Use the Volume of Revolution tutor to calculate the volume of the solid. Before closing the tutor, copy the text at the bottom (in the Maple Command box).      Paste this command onto a new line and change 'output'=plot to 'output'=value to output the volume of the resulting solid. volume of revolution VolumeOfRevolution  volume of revolution VolumeOfRevolution!output options     You will need to include the Student[Calculus1] package by typing with(Student[Calculus1]): on a new line before the VolumeOfRevolution() command will work.    "
},
{
  "id": "act_volumes_of_revolution-4-4",
  "level": "2",
  "url": "act_volumes_of_revolution.html#act_volumes_of_revolution-4-4",
  "type": "Exercise",
  "number": "3.9.3.4",
  "title": "",
  "body": "  Suppose you want to find the volume of an egg that has an elliptical shape defined in the -plane by .     Plot the curve using the implicitplot() command.    Don't forget to include the plots package before using implicitplot() . packages plots     When plotting the ellipse, it may initially look like a circle. This is because Maple does not use the same scaling for each axis. Try clicking on the plot and using the button in the top menu.      Solve the equation of the curve for to get the equations of the top and bottom halves of the ellipse.      Find the -intercepts of this ellipse.      Use the Volume of Revolution tutor or your choice of either the int() or Int() commands to calculate the volume of the solid obtained by revolving the top half of the ellipse about the -axis. integral Int  integral int     "
},
{
  "id": "act_golden_gate_bridge_problem",
  "level": "1",
  "url": "act_golden_gate_bridge_problem.html",
  "type": "Section",
  "number": "3.10",
  "title": "Arc Length and The Golden Gate Bridge Problem",
  "body": " Arc Length and The Golden Gate Bridge Problem   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  Arc length is the distance between two points along a section of a curve. If this curve can be represented by a function , then we can calculate the length of this curve from to with the formula . arc length In this activity, you will determine the arc length of a variety of functions and curves. You can then apply equation above to determine the length of the cable that holds up the Golden Gate Bridge.      Begin by assigning the function using the assignment operator, := .     Plot the graph of the function.      Determine the arc length of this curve between the points and .    Remember that you must type Pi in Maple for , or use the palettes toolbar. Pi        Consider the curve .     Plot the graph of the curve using implicitplot() .    Since this is an implicit curve, you will need to ensure that you load the plots package. You can do this with the command with(plots) . It is typically a good idea to load packages at the top of your worksheet. packages plots       Solve the equation of the curve for to get the equations of the top and bottom halves of the curves as functions.      Determine the arc length of this curve between the points and .       Consider the function .     Plot the graph of the function. Since is defined as a function of , you may need to use implicitplot() to plot the equation of the curve.    You may need to include multiplication between and in the equation of this curve.      Determine the arc length of this curve for .    In this exercise, since is a function of , equation should be an integral in terms of .       The main span of the Golden Gate Bridge is 1280 metres long, as shown in Figure . The top of each of the towers is 230 metres above the surface of the water.   The approximate dimensions of the Golden Gate Bridge.    Letting the -axis be the surface of the water and the -axis be at the centre of the bridge, you may assume that the Golden Gate Bridge cable takes the shape of a catenary over the main span with its lowest point at , corresponding to a height of 70 metres above the water.   A catenary is a curve that an idealized hanging chain or cable assumes under its own weight when supported only at its ends.  Equation makes use of the hyperbolic trigonometric functions, and . These functions are analogs of the ordinary circular trigonometric functions; just as the points form a circle with a unit radius, the points form the right half of the equilateral hyperbola. mathematical functions hyperbolic functions!sinh  mathematical functions hyperbolic functions!cosh    The general form for a catenary passing through its lowest point at is , or equivalently, .  This gives a more simplistic model of the main span cable, as shown in .   A catenary model of the main span cable.      In this exercise, you will determine the length of the main span cable (between the two towers).     Using equation and the points provided in Figure , assign the proper value to .      Use the coordinates of the top of one of the towers from Figure , as well as the fsolve() command to determine the value of for this catenary. Assign this value to . solving equations fsolve       Using your assigned values of and , assign the function in and determine the length of the main span cable.     Interesting facts: The Golden Gate Bridge cable is almost a catenary and almost a parabola, but not quite either (because of the weight of the cables, the suspender ropes, and the roadway). The actual cable length is 2,332 metres, from shore to shore. The main cables of the Golden Gate Bridge are nearly one metre in diameter (actually, 0.91 metres) and the total length of galvanized steel wire used in both main cables is 129,000 km.     "
},
{
  "id": "act_golden_gate_bridge_problem-4-1",
  "level": "2",
  "url": "act_golden_gate_bridge_problem.html#act_golden_gate_bridge_problem-4-1",
  "type": "Exercise",
  "number": "3.10.3.1",
  "title": "",
  "body": "  Begin by assigning the function using the assignment operator, := .     Plot the graph of the function.      Determine the arc length of this curve between the points and .    Remember that you must type Pi in Maple for , or use the palettes toolbar. Pi     "
},
{
  "id": "act_golden_gate_bridge_problem-4-2",
  "level": "2",
  "url": "act_golden_gate_bridge_problem.html#act_golden_gate_bridge_problem-4-2",
  "type": "Exercise",
  "number": "3.10.3.2",
  "title": "",
  "body": "  Consider the curve .     Plot the graph of the curve using implicitplot() .    Since this is an implicit curve, you will need to ensure that you load the plots package. You can do this with the command with(plots) . It is typically a good idea to load packages at the top of your worksheet. packages plots       Solve the equation of the curve for to get the equations of the top and bottom halves of the curves as functions.      Determine the arc length of this curve between the points and .    "
},
{
  "id": "act_golden_gate_bridge_problem-4-3",
  "level": "2",
  "url": "act_golden_gate_bridge_problem.html#act_golden_gate_bridge_problem-4-3",
  "type": "Exercise",
  "number": "3.10.3.3",
  "title": "",
  "body": "  Consider the function .     Plot the graph of the function. Since is defined as a function of , you may need to use implicitplot() to plot the equation of the curve.    You may need to include multiplication between and in the equation of this curve.      Determine the arc length of this curve for .    In this exercise, since is a function of , equation should be an integral in terms of .    "
},
{
  "id": "act_golden_gate_bridge_problem-4-4",
  "level": "2",
  "url": "act_golden_gate_bridge_problem.html#act_golden_gate_bridge_problem-4-4",
  "type": "Exercise",
  "number": "3.10.3.4",
  "title": "",
  "body": "  The main span of the Golden Gate Bridge is 1280 metres long, as shown in Figure . The top of each of the towers is 230 metres above the surface of the water.   The approximate dimensions of the Golden Gate Bridge.    Letting the -axis be the surface of the water and the -axis be at the centre of the bridge, you may assume that the Golden Gate Bridge cable takes the shape of a catenary over the main span with its lowest point at , corresponding to a height of 70 metres above the water.   A catenary is a curve that an idealized hanging chain or cable assumes under its own weight when supported only at its ends.  Equation makes use of the hyperbolic trigonometric functions, and . These functions are analogs of the ordinary circular trigonometric functions; just as the points form a circle with a unit radius, the points form the right half of the equilateral hyperbola. mathematical functions hyperbolic functions!sinh  mathematical functions hyperbolic functions!cosh    The general form for a catenary passing through its lowest point at is , or equivalently, .  This gives a more simplistic model of the main span cable, as shown in .   A catenary model of the main span cable.      In this exercise, you will determine the length of the main span cable (between the two towers).     Using equation and the points provided in Figure , assign the proper value to .      Use the coordinates of the top of one of the towers from Figure , as well as the fsolve() command to determine the value of for this catenary. Assign this value to . solving equations fsolve       Using your assigned values of and , assign the function in and determine the length of the main span cable.     Interesting facts: The Golden Gate Bridge cable is almost a catenary and almost a parabola, but not quite either (because of the weight of the cables, the suspender ropes, and the roadway). The actual cable length is 2,332 metres, from shore to shore. The main cables of the Golden Gate Bridge are nearly one metre in diameter (actually, 0.91 metres) and the total length of galvanized steel wire used in both main cables is 129,000 km.   "
},
{
  "id": "act_infinite_integrals",
  "level": "1",
  "url": "act_infinite_integrals.html",
  "type": "Section",
  "number": "3.11",
  "title": "Infinite Integrals",
  "body": " Infinite Integrals   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  Infinite integrals are used in a variety of applications, including finding solutions to differential equations by way of the Laplace transform. Infinite integrals can be challenging to evaluate by hand, but in this activity you will see that Maple can handle infinite integrals easily. integral improper       Assign the function using the assignment operator, := . mathematical functions square root      Plot . plot       Evaluate the integral . integral        Assign the function in Maple.     Plot .    The exponential function, , in Maple may be typed as exp(x) . You may also use the palette toolbar to use the proper . You may not simply type the letter `e` for the natural exponential function. mathematical functions exponential       Evaluate the integral .       Assign the function in Maple.     Plot .      Evaluate the integral .       The Laplace transform of a function is an integral operation given by . Note that this integral involves the integrating variable, , as well as a second variable, . The result after the definite integral is a function of , assuming that the integral is convergent.     You will need to begin by telling Maple to assume that is a positive real number (as opposed to a complex number). To do this, run the following command on a new line:   assume(s, positive);   Maple will now assume that can only be a real-valued variable. However, it defaults to showing this assumption by outputting a tilde character whenever the variable shows up in output. You can hide assumptions on variables by running a second command: assume    interface(showassumed=0);   Run both of these commands so that you can evaluate the Laplace transform in part (b).      Evaluate the Laplace transform of using the integral in equation .      "
},
{
  "id": "act_infinite_integrals-4-1",
  "level": "2",
  "url": "act_infinite_integrals.html#act_infinite_integrals-4-1",
  "type": "Exercise",
  "number": "3.11.3.1",
  "title": "",
  "body": "  Assign the function using the assignment operator, := . mathematical functions square root      Plot . plot       Evaluate the integral . integral     "
},
{
  "id": "act_infinite_integrals-4-2",
  "level": "2",
  "url": "act_infinite_integrals.html#act_infinite_integrals-4-2",
  "type": "Exercise",
  "number": "3.11.3.2",
  "title": "",
  "body": "  Assign the function in Maple.     Plot .    The exponential function, , in Maple may be typed as exp(x) . You may also use the palette toolbar to use the proper . You may not simply type the letter `e` for the natural exponential function. mathematical functions exponential       Evaluate the integral .    "
},
{
  "id": "act_infinite_integrals-4-3",
  "level": "2",
  "url": "act_infinite_integrals.html#act_infinite_integrals-4-3",
  "type": "Exercise",
  "number": "3.11.3.3",
  "title": "",
  "body": "  Assign the function in Maple.     Plot .      Evaluate the integral .    "
},
{
  "id": "act_infinite_integrals-4-4",
  "level": "2",
  "url": "act_infinite_integrals.html#act_infinite_integrals-4-4",
  "type": "Exercise",
  "number": "3.11.3.4",
  "title": "",
  "body": "  The Laplace transform of a function is an integral operation given by . Note that this integral involves the integrating variable, , as well as a second variable, . The result after the definite integral is a function of , assuming that the integral is convergent.     You will need to begin by telling Maple to assume that is a positive real number (as opposed to a complex number). To do this, run the following command on a new line:   assume(s, positive);   Maple will now assume that can only be a real-valued variable. However, it defaults to showing this assumption by outputting a tilde character whenever the variable shows up in output. You can hide assumptions on variables by running a second command: assume    interface(showassumed=0);   Run both of these commands so that you can evaluate the Laplace transform in part (b).      Evaluate the Laplace transform of using the integral in equation .    "
},
{
  "id": "act_probability",
  "level": "1",
  "url": "act_probability.html",
  "type": "Section",
  "number": "3.12",
  "title": "Probability",
  "body": " Probability   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  In this activity, you will use integration to calculate probabilities of continuous random variables. A continuous random variable is a numerical variable, , that can take on any value within a given range or interval. For example, perhaps represents the temperature in a particular classroom, which may be any value within a certain range, such as 20 to 25 degrees Celsius.   Probability Notation  The probability notation is read as \"the probability that is between and .\" Similarly, is read as \"the probability that is less than .\" The calculation of these probabilities is done by integrating the probability density function over the appropriate interval.   Every continuous random variable has a probability density function (\"pdf\"), . If you want to compute the probability that the value of lies between and , then you integrate over that interval: . Similarly, assuming that the domain of is , you may also compute the probability that the value of is either less than or more than some value using improper integration: . . probability  integral improper   Since a probability is always a value between 0 and 1 (or 100%), a probability density function must always satisfy the following criteria:   In the following exercises, you will use two very common families of probability density functions: the exponential distribution, and the normal distribution. The probability density functions for both of these are described below, along with their mean (the expected value of ) and standard deviation (a measurement of the spread of observed values of ).   The Exponential Distribution   The probability density function for the exponential distribution is defined as where is the mean and standard deviation of the probability distribution. probability exponential density function      The exponential probability distribution function       The Normal Distribution   The probability density function for the normal distribution is defined as , where is the mean and is the standard deviation.     The normal probability distribution function          Suppose that the lifetime of a certain tire is exponentially distributed with mean miles.     Use the piecewise() command to assign the function from equation using . mathematical functions piecewise     Examples of the piecewise() command can be found in .      Verify that this function is a valid pdf by showing that the integral in equation is, in fact, equal to 1.      Find the probability that a given tire will last more than 40,000 miles.      Find the probability that a given tire will last less than 50,000 miles.      Find the probability that a given tire will last between 40,000 and 50,000 miles.       Suppose that the height of a male is normally distributed with mean cm and standard deviation cm.     Assign the function from equation using these values of and .    Make sure to use the proper exponential function ( exp() or from the palettes toolbar) as well as the proper numerical value of ( Pi or use the palettes toolbar). mathematical functions exponential  Pi       Verify that this function is a valid pdf by showing that the integral in equation is, in fact, equal to 1.      Suppose you have a friend who is ft tall ( cm). Find the probability that a given individual is taller.      Find the probability that a given individual is shorter than cm.      What is the probability of selecting an individual with a height of exactly cm?    Use properties of definite integrals. What is the value of ?      "
},
{
  "id": "def-exponential-dist",
  "level": "2",
  "url": "act_probability.html#def-exponential-dist",
  "type": "Definition",
  "number": "3.4",
  "title": "The Exponential Distribution.",
  "body": " The Exponential Distribution   The probability density function for the exponential distribution is defined as where is the mean and standard deviation of the probability distribution. probability exponential density function    "
},
{
  "id": "fig_exponential_dist",
  "level": "2",
  "url": "act_probability.html#fig_exponential_dist",
  "type": "Figure",
  "number": "3.5",
  "title": "",
  "body": " The exponential probability distribution function     "
},
{
  "id": "def-normal-dist",
  "level": "2",
  "url": "act_probability.html#def-normal-dist",
  "type": "Definition",
  "number": "3.6",
  "title": "The Normal Distribution.",
  "body": " The Normal Distribution   The probability density function for the normal distribution is defined as , where is the mean and is the standard deviation.   "
},
{
  "id": "fig_normal_dist",
  "level": "2",
  "url": "act_probability.html#fig_normal_dist",
  "type": "Figure",
  "number": "3.7",
  "title": "",
  "body": " The normal probability distribution function     "
},
{
  "id": "act_probability-4-1",
  "level": "2",
  "url": "act_probability.html#act_probability-4-1",
  "type": "Exercise",
  "number": "3.12.3.1",
  "title": "",
  "body": "  Suppose that the lifetime of a certain tire is exponentially distributed with mean miles.     Use the piecewise() command to assign the function from equation using . mathematical functions piecewise     Examples of the piecewise() command can be found in .      Verify that this function is a valid pdf by showing that the integral in equation is, in fact, equal to 1.      Find the probability that a given tire will last more than 40,000 miles.      Find the probability that a given tire will last less than 50,000 miles.      Find the probability that a given tire will last between 40,000 and 50,000 miles.    "
},
{
  "id": "act_probability-4-2",
  "level": "2",
  "url": "act_probability.html#act_probability-4-2",
  "type": "Exercise",
  "number": "3.12.3.2",
  "title": "",
  "body": "  Suppose that the height of a male is normally distributed with mean cm and standard deviation cm.     Assign the function from equation using these values of and .    Make sure to use the proper exponential function ( exp() or from the palettes toolbar) as well as the proper numerical value of ( Pi or use the palettes toolbar). mathematical functions exponential  Pi       Verify that this function is a valid pdf by showing that the integral in equation is, in fact, equal to 1.      Suppose you have a friend who is ft tall ( cm). Find the probability that a given individual is taller.      Find the probability that a given individual is shorter than cm.      What is the probability of selecting an individual with a height of exactly cm?    Use properties of definite integrals. What is the value of ?    "
},
{
  "id": "act_motion_of_a_mass_connected_to_a_spring",
  "level": "1",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html",
  "type": "Section",
  "number": "3.13",
  "title": "Motion of a Mass Connected to a Spring",
  "body": " Motion of a Mass Connected to a Spring   Recommended Tutorial  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:       Introduction  According to Hooke's law ( ) and Newton's second law ( ), the differential equation for the motion of a mass ( ) on the end of a spring is , where is the spring constant (a measure of the stiffness of the spring). This equation assumes no damping (resistance). The displacement of the mass from equilibrium is denoted by , and thus is the velocity, and is the acceleration. differential equations hooke's law    A simple mass-spring system.    If we add damping (resistance) to the spring, then the damping is opposite the direction of the motion and proportional to the velocity. Therefore we have the equation, , where is the damping constant.  In the following exercises, you will assume that the mass is kg and the spring constant is kg\/s . You will look at the equation of motion with no damping ( ), overdamping ( kg\/s), and underdamping ( kg\/s).  In all cases, you will use the initial conditions m and m\/s.      Consider the equation of motion of a -kg mass attached to a spring with kg\/s . .     Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first fifteen seconds.    The rhs() command may be used to refer to only the right hand side of the differential equation solution. You can use this command to assign a name to the solution. differential equations rhs()       Insert a new paragraph and describe what you observe about the motion of a mass on the spring.       Consider the equation of motion of a -kg mass attached to a spring with kg\/s and a damping constant of kg\/s. This is considered overdamping . .   Solutions to these differential equations typically involve sine and cosine functions of the form . The period of these oscillations may be found using the formula . mathematical functions sine  mathematical functions cosine       Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first fifteen seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with overdamping.       Consider the equation of motion of a -kg mass attached to a spring with kg\/s and a damping constant of kg\/s. This is considered underdamping . .   To solve these differential equations algebraically, you assume that solutions are of the form and then plug it into the differential equation to get the characteristic equation to solve for . If the roots are complex, then you will have oscillations (sine and cosine functions) and if the roots are real, then you have strictly exponential solutions. Notice that the overdamped case has no oscillations whereas the underdamping and no-damping cases have oscillations in their solutions. mathematical functions exponential       Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first thirty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with underdamping.       Suppose you wish to force the spring to oscillate at a given frequency. Let's add a forcing term to the undamped equation of motion from exercise .      Solve the differential equation using the given initial conditions.      Plot the differential equation solution for the first sixty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with forcing and no damping.       Let's add damping to equation of motion from exercise with a damping constant of kg\/s.      Solve the differential equation using the given initial conditions.      Plot the differential equation solution for the first sixty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with forcing and underdamping.      "
},
{
  "id": "fig_mass_spring",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#fig_mass_spring",
  "type": "Figure",
  "number": "3.8",
  "title": "",
  "body": " A simple mass-spring system.   "
},
{
  "id": "ex_mass_spring_nodamping",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#ex_mass_spring_nodamping",
  "type": "Exercise",
  "number": "3.13.3.1",
  "title": "",
  "body": "  Consider the equation of motion of a -kg mass attached to a spring with kg\/s . .     Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first fifteen seconds.    The rhs() command may be used to refer to only the right hand side of the differential equation solution. You can use this command to assign a name to the solution. differential equations rhs()       Insert a new paragraph and describe what you observe about the motion of a mass on the spring.    "
},
{
  "id": "act_motion_of_a_mass_connected_to_a_spring-4-2",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#act_motion_of_a_mass_connected_to_a_spring-4-2",
  "type": "Exercise",
  "number": "3.13.3.2",
  "title": "",
  "body": "  Consider the equation of motion of a -kg mass attached to a spring with kg\/s and a damping constant of kg\/s. This is considered overdamping . .   Solutions to these differential equations typically involve sine and cosine functions of the form . The period of these oscillations may be found using the formula . mathematical functions sine  mathematical functions cosine       Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first fifteen seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with overdamping.    "
},
{
  "id": "ex_mass_spring_underdamping",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#ex_mass_spring_underdamping",
  "type": "Exercise",
  "number": "3.13.3.3",
  "title": "",
  "body": "  Consider the equation of motion of a -kg mass attached to a spring with kg\/s and a damping constant of kg\/s. This is considered underdamping . .   To solve these differential equations algebraically, you assume that solutions are of the form and then plug it into the differential equation to get the characteristic equation to solve for . If the roots are complex, then you will have oscillations (sine and cosine functions) and if the roots are real, then you have strictly exponential solutions. Notice that the overdamped case has no oscillations whereas the underdamping and no-damping cases have oscillations in their solutions. mathematical functions exponential       Solve the differential equation using the given initial conditions.      Plot the solution of the differential equation for the first thirty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with underdamping.    "
},
{
  "id": "ex_mass_spring_forcing",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#ex_mass_spring_forcing",
  "type": "Exercise",
  "number": "3.13.3.4",
  "title": "",
  "body": "  Suppose you wish to force the spring to oscillate at a given frequency. Let's add a forcing term to the undamped equation of motion from exercise .      Solve the differential equation using the given initial conditions.      Plot the differential equation solution for the first sixty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with forcing and no damping.    "
},
{
  "id": "act_motion_of_a_mass_connected_to_a_spring-4-5",
  "level": "2",
  "url": "act_motion_of_a_mass_connected_to_a_spring.html#act_motion_of_a_mass_connected_to_a_spring-4-5",
  "type": "Exercise",
  "number": "3.13.3.5",
  "title": "",
  "body": "  Let's add damping to equation of motion from exercise with a damping constant of kg\/s.      Solve the differential equation using the given initial conditions.      Plot the differential equation solution for the first sixty seconds.      Insert a new paragraph and describe what you observe about the motion of a mass on the spring with forcing and underdamping.    "
},
{
  "id": "act_tank_mixing_problem",
  "level": "1",
  "url": "act_tank_mixing_problem.html",
  "type": "Section",
  "number": "3.14",
  "title": "Tank Mixing Problem",
  "body": " Tank Mixing Problem   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:         Introduction  In this activity, you will investigate differential equations that arise from the mixture of fluid in a tank. You will need to have a basic understanding of the relationship between mass, volume, and concentration.  Concentration is defined as . Therefore, to determine mass given a volume and concentration, .  Suppose you are having a wedding and you start with a 5 L tank of coffee that has a concentration of 60 g\/L. The wedding guests are drinking the coffee at a rate of 0.2 L\/min. You are refilling the tank at a rate of 0.15 L\/min with coffee that has a concentration of 50 g\/L.   An illustration of the tank of coffee. The initial conditions for the volume and mass of coffee are shown.      In the following exercises, you will set up and solve differential equations that describe the mass of coffee in the tank as well as the concentration of coffee in the tank at a given time.      To begin, you will need to determine the volume of coffee in the tank at any given time. Since the flow rate in is different from the flow rate out, this volume is not constant.     Set up a differential equation for the rate of change of volume of coffee in the tank using .      Solve this differential equation using the initial condition to obtain a formula for the volume after minutes.      Use the solve() solving equations solve command to compute how long it will be until you run out of coffee.       Using the given information and the volume of coffee in the tank at time from the previous exercise, you can now determine the mass of coffee in the tank at any given time.     Set up a differential equation for the mass of coffee in the tank using .    The concentration entering the tank, the volume rate in, and the volume rate out are all given. However, the concentration in the tank at time will need to be given as a fraction of mass divided by volume . This volume comes from the previous exercise, but remains an unknown function until you can solve this differential equation.      Solve the differential equation for mass using your initial condition for the mass of the coffee after minutes.       Determine the function for the concentration of the coffee in the tank after minutes using .      Plot , , and on separate graphs to see what happens to the mass, volume, and concentration over time.      Use the limit() command to determine the concentration of coffee as you approach the last drop of coffee. limit      "
},
{
  "id": "fig_coffee_tank",
  "level": "2",
  "url": "act_tank_mixing_problem.html#fig_coffee_tank",
  "type": "Figure",
  "number": "3.9",
  "title": "",
  "body": " An illustration of the tank of coffee. The initial conditions for the volume and mass of coffee are shown.     "
},
{
  "id": "act_tank_mixing_problem-4-1",
  "level": "2",
  "url": "act_tank_mixing_problem.html#act_tank_mixing_problem-4-1",
  "type": "Exercise",
  "number": "3.14.3.1",
  "title": "",
  "body": "  To begin, you will need to determine the volume of coffee in the tank at any given time. Since the flow rate in is different from the flow rate out, this volume is not constant.     Set up a differential equation for the rate of change of volume of coffee in the tank using .      Solve this differential equation using the initial condition to obtain a formula for the volume after minutes.      Use the solve() solving equations solve command to compute how long it will be until you run out of coffee.    "
},
{
  "id": "act_tank_mixing_problem-4-2",
  "level": "2",
  "url": "act_tank_mixing_problem.html#act_tank_mixing_problem-4-2",
  "type": "Exercise",
  "number": "3.14.3.2",
  "title": "",
  "body": "  Using the given information and the volume of coffee in the tank at time from the previous exercise, you can now determine the mass of coffee in the tank at any given time.     Set up a differential equation for the mass of coffee in the tank using .    The concentration entering the tank, the volume rate in, and the volume rate out are all given. However, the concentration in the tank at time will need to be given as a fraction of mass divided by volume . This volume comes from the previous exercise, but remains an unknown function until you can solve this differential equation.      Solve the differential equation for mass using your initial condition for the mass of the coffee after minutes.    "
},
{
  "id": "act_tank_mixing_problem-4-3",
  "level": "2",
  "url": "act_tank_mixing_problem.html#act_tank_mixing_problem-4-3",
  "type": "Exercise",
  "number": "3.14.3.3",
  "title": "",
  "body": "  Determine the function for the concentration of the coffee in the tank after minutes using .   "
},
{
  "id": "act_tank_mixing_problem-4-4",
  "level": "2",
  "url": "act_tank_mixing_problem.html#act_tank_mixing_problem-4-4",
  "type": "Exercise",
  "number": "3.14.3.4",
  "title": "",
  "body": "  Plot , , and on separate graphs to see what happens to the mass, volume, and concentration over time.   "
},
{
  "id": "act_tank_mixing_problem-4-5",
  "level": "2",
  "url": "act_tank_mixing_problem.html#act_tank_mixing_problem-4-5",
  "type": "Exercise",
  "number": "3.14.3.5",
  "title": "",
  "body": "  Use the limit() command to determine the concentration of coffee as you approach the last drop of coffee. limit    "
},
{
  "id": "act_direction_fields",
  "level": "1",
  "url": "act_direction_fields.html",
  "type": "Section",
  "number": "3.15",
  "title": "Direction Fields for Population Growth",
  "body": " Direction Fields for Population Growth   Recommended Tutorial  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:       Introduction  In this activity, you will use direction fields to predict the population dynamics for a population of rabbits. You will need to include the DETools package in your Maple worksheet to use the DEplot() command. differential equations DETools  packages differential equations!DETools!DEplot()   Suppose that you have a population of rabbits and is the number of rabbits at time . A basic model for the population of rabbits could be given as , where is the birth rate and is the death rate.  However, equation does not consider limitations due to habitat and food supply. If you wish to use a more accurate model, then you may consider the logistic growth model , where is the relative growth rate and is the carrying capacity (the maximum population that is sustainable).  The death rate of the rabbits (due to hunting) can be added to this logistic model to obtain the differential equation , where is the hunting rate.  In the following exercises, you will examine solutions to equations using two different initial conditions: and .      Consider the basic population model in equation .     Draw the direction field using and , including both initial conditions given.    Remember to use and not just in your differential equation.      Draw the direction field using and , including both initial conditions given.      In a new paragraph in your worksheet, describe what you can conclude about the importance of the death to birth rate comparison.       Consider the logistic growth model in equation .     Draw the direction field using and , including both of the initial conditions given.      In a new paragraph, describe what you observe about the solutions.       Consider the logistic growth model in equation .     Draw the direction field using , , and , including both of the initial conditions given.      In a new paragraph in your worksheet, describe what changed from exercise by adding the death rate to the differential equation.       Most mammal population growth is dependent upon other species in the region, via an interconnected food web. One simple predator-prey model is the Lotka-Volterra model where is the population of prey and is the population of predators. In this equation, the prey grow and are eaten by predators. The predators' growth depends on eating the prey and the predators have a death rate.     Open the DE Plots tutor, listed under Differential Equations. Select the Lotka-Volterra Model and click DEPlot. Try changing the parameters and the initial conditions to get a sense of how the prey population and predator population are connected. Then click quit to display a plot on your Maple worksheet.      In a new paragraph, explain what the prey and predator populations do on this direction field. Notice that the prey is on the -axis and the predator is on the -axis of the direction field. differential equations DETools  packages differential equations!DETools!DEplot()       "
},
{
  "id": "act_direction_fields-4-1",
  "level": "2",
  "url": "act_direction_fields.html#act_direction_fields-4-1",
  "type": "Exercise",
  "number": "3.15.3.1",
  "title": "",
  "body": "  Consider the basic population model in equation .     Draw the direction field using and , including both initial conditions given.    Remember to use and not just in your differential equation.      Draw the direction field using and , including both initial conditions given.      In a new paragraph in your worksheet, describe what you can conclude about the importance of the death to birth rate comparison.    "
},
{
  "id": "ex_rabbits_logistic",
  "level": "2",
  "url": "act_direction_fields.html#ex_rabbits_logistic",
  "type": "Exercise",
  "number": "3.15.3.2",
  "title": "",
  "body": "  Consider the logistic growth model in equation .     Draw the direction field using and , including both of the initial conditions given.      In a new paragraph, describe what you observe about the solutions.    "
},
{
  "id": "act_direction_fields-4-3",
  "level": "2",
  "url": "act_direction_fields.html#act_direction_fields-4-3",
  "type": "Exercise",
  "number": "3.15.3.3",
  "title": "",
  "body": "  Consider the logistic growth model in equation .     Draw the direction field using , , and , including both of the initial conditions given.      In a new paragraph in your worksheet, describe what changed from exercise by adding the death rate to the differential equation.    "
},
{
  "id": "act_direction_fields-4-4",
  "level": "2",
  "url": "act_direction_fields.html#act_direction_fields-4-4",
  "type": "Exercise",
  "number": "3.15.3.4",
  "title": "",
  "body": "  Most mammal population growth is dependent upon other species in the region, via an interconnected food web. One simple predator-prey model is the Lotka-Volterra model where is the population of prey and is the population of predators. In this equation, the prey grow and are eaten by predators. The predators' growth depends on eating the prey and the predators have a death rate.     Open the DE Plots tutor, listed under Differential Equations. Select the Lotka-Volterra Model and click DEPlot. Try changing the parameters and the initial conditions to get a sense of how the prey population and predator population are connected. Then click quit to display a plot on your Maple worksheet.      In a new paragraph, explain what the prey and predator populations do on this direction field. Notice that the prey is on the -axis and the predator is on the -axis of the direction field. differential equations DETools  packages differential equations!DETools!DEplot()     "
},
{
  "id": "act_series_convergence_and_divergence",
  "level": "1",
  "url": "act_series_convergence_and_divergence.html",
  "type": "Section",
  "number": "3.16",
  "title": "Series Convergence and Divergence",
  "body": " Series Convergence and Divergence   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  An infinite series is a summation of the form . sequences and series A common type of infinite series is the geometric series, where each term in the series is obtained by multiplying the previous term by a fixed ratio, such as . To understand the result of the sum in equation , we can add the first few terms, called a partial sum. Looking at a sequence of partial sums, one at a time, may give an indication of the sum of the infinite series.   By looking at these partial sums, we can see that the sum is approaching the value . We say that this series is convergent . In other cases, the partial sums do not approach a finite value. We say that these series are divergent.  sequences and series divergent  sequences and series convergent   In this activity, you will use Maple's Sum() command to quickly evaluate whether a series is convergent or divergent. Maple will give the value of the sum for a convergent series and will give the value or if the series is divergent. infinity       For each of the following series, set up the series symbolically using the Sum() command. Then, use the value(%) command to evaluate the sum and determine if it converges. sequences and series Sum  value  ditto operator          The is the factorial symbol, defined as .            Make sure to use Pi for (or use the palettes toolbar) and place multiplication between the and . Pi                      Another method for determining convergence or divergence of an infinite series is by comparing the series to a improper integral. This only applies to very specific infinite series.  The Integral Test for Convergence states that for a non-negative, monotonically decreasing function and an integer , the infinite series converges to a real number if and only if the improper integral is finite. From this, we can also conclude that if the integral diverges, then the series diverges as well. integral  integral improper   In this exercise you will determine the convergence or divergence of the series using the Integral Test.     Graph the function to see that the function is non-negative and monotonically decreasing over the interval .    After plotting , try to think about why this series starts at .      Evaluate the integral given in the Integral Test to determine whether the series converges or diverges.      "
},
{
  "id": "act_series_convergence_and_divergence-4-1",
  "level": "2",
  "url": "act_series_convergence_and_divergence.html#act_series_convergence_and_divergence-4-1",
  "type": "Exercise",
  "number": "3.16.3.1",
  "title": "",
  "body": "  For each of the following series, set up the series symbolically using the Sum() command. Then, use the value(%) command to evaluate the sum and determine if it converges. sequences and series Sum  value  ditto operator          The is the factorial symbol, defined as .            Make sure to use Pi for (or use the palettes toolbar) and place multiplication between the and . Pi                   "
},
{
  "id": "act_series_convergence_and_divergence-4-2",
  "level": "2",
  "url": "act_series_convergence_and_divergence.html#act_series_convergence_and_divergence-4-2",
  "type": "Exercise",
  "number": "3.16.3.2",
  "title": "",
  "body": "  Another method for determining convergence or divergence of an infinite series is by comparing the series to a improper integral. This only applies to very specific infinite series.  The Integral Test for Convergence states that for a non-negative, monotonically decreasing function and an integer , the infinite series converges to a real number if and only if the improper integral is finite. From this, we can also conclude that if the integral diverges, then the series diverges as well. integral  integral improper   In this exercise you will determine the convergence or divergence of the series using the Integral Test.     Graph the function to see that the function is non-negative and monotonically decreasing over the interval .    After plotting , try to think about why this series starts at .      Evaluate the integral given in the Integral Test to determine whether the series converges or diverges.    "
},
{
  "id": "act_taylor_series",
  "level": "1",
  "url": "act_taylor_series.html",
  "type": "Section",
  "number": "3.17",
  "title": "Taylor and Maclaurin Series",
  "body": " Taylor and Maclaurin Series   Recommended Tutorials  Before starting on these exercises, you should familiarize yourself with the material covered in the following tutorials:        Introduction  The Taylor series of a function centred at is the infinite series where is using the factorial operator, defined by . Writing out the first terms of a Taylor series gives the th degree Taylor polynomial approximation of : . Equation should look familiar; it is the linear approximation formula and the equation of the tangent line to at . Similarly, equation gives quadratic approximation and equation gives cubic approximation.  Comparing the graphs of these Taylor polynomial approximations to the graph of can reveal information about the interval of convergence of the Taylor series. This is the interval for over which the Taylor series converges to the graph of . This interval is always centred at . The radius of convergence is exactly half the width of the interval of convergence and may be infinite if the Taylor series converges to over the entire real number line.  In this activity, you will calculate Taylor series of functions centred at : . This specific type of Taylor series is also commonly known as a Maclaurin series. You will compute and plot Taylor polynomial approximations and compare their graphs to the function to understand how the radius of convergence works. sequences and series Taylor and Maclaurin series  sequences and series Taylor and Maclaurin series!formula       In this exercise, you will calculate several Taylor polynomial approximations for centred at and consider the interval of convergence of the Taylor series.     Compute the rd degree Taylor polynomial approximation of centred at and assign it as a polynomial to poly3 .    The second degree Taylor polynomial can be obtained by using the command taylor(cos(x), x=0, 3) . This can then be converted to a polynomial and assigned to the name poly2 using the command poly2 := convert(%, polynom) . Both of these commands can be written on a single Maple input with a semicolon between them. sequences and series Taylor and Maclaurin series!convert to polynomial  ditto operator   Examples of finding and plotting Taylor series can be found in .      Repeat part (a) for the th, th, and rd degree Taylor polynomial approximations. Assign each of these polynomials to a different name.    Note that some powers may not appear in the polynomial if the coefficient for that term is equal to zero.      Plot and all four of the Taylor polynomial approximations on a single graph. plot     You may want to choose different colours for each of these five curves to keep track of which is which.      In a new paragraph, describe how the graphs of the Taylor polynomial approximations compare to as the degree increases.      If you were to increase the degree infinitely, you should expect that the approximation will converge to the function within the radius of convergence on either side of . In a new paragraph state what you expect the radius of convergence to be.       In this exercise, you will calculate several Taylor polynomial approximations for and determine the radius of convergence for the Taylor series approximation centred at .     Compute the nd, th, th, and rd degree Taylor polynomial approximations of centred at . Assign each to a new name.      Plot and all four Taylor polynomial approximations on the same graph. How do the graphs of the Taylor polynomial approximations compare to as the degree increases?      In a new paragraph in your worksheet, state what you expect the radius of convergence to be for the Taylor series of centred at .       Because the higher derivatives of and both form predictable patterns when evaluated at , it is possible to write the Taylor series for these functions centred at in their compact forms:      Plot the first 51 nonzero terms of equation . Does this seem to confirm the radius of convergence you were expecting in exercise ?    The first 50 nonzero terms are given by . You may use the Sum() command or the palettes toolbar to create this expression in your plot() command.      Plot the first 51 nonzero terms of equation . Does this seem to confirm the radius of convergence you were expecting in exercise ?      "
},
{
  "id": "ex_taylor_cos",
  "level": "2",
  "url": "act_taylor_series.html#ex_taylor_cos",
  "type": "Exercise",
  "number": "3.17.3.1",
  "title": "",
  "body": "  In this exercise, you will calculate several Taylor polynomial approximations for centred at and consider the interval of convergence of the Taylor series.     Compute the rd degree Taylor polynomial approximation of centred at and assign it as a polynomial to poly3 .    The second degree Taylor polynomial can be obtained by using the command taylor(cos(x), x=0, 3) . This can then be converted to a polynomial and assigned to the name poly2 using the command poly2 := convert(%, polynom) . Both of these commands can be written on a single Maple input with a semicolon between them. sequences and series Taylor and Maclaurin series!convert to polynomial  ditto operator   Examples of finding and plotting Taylor series can be found in .      Repeat part (a) for the th, th, and rd degree Taylor polynomial approximations. Assign each of these polynomials to a different name.    Note that some powers may not appear in the polynomial if the coefficient for that term is equal to zero.      Plot and all four of the Taylor polynomial approximations on a single graph. plot     You may want to choose different colours for each of these five curves to keep track of which is which.      In a new paragraph, describe how the graphs of the Taylor polynomial approximations compare to as the degree increases.      If you were to increase the degree infinitely, you should expect that the approximation will converge to the function within the radius of convergence on either side of . In a new paragraph state what you expect the radius of convergence to be.    "
},
{
  "id": "ex_taylor_ln",
  "level": "2",
  "url": "act_taylor_series.html#ex_taylor_ln",
  "type": "Exercise",
  "number": "3.17.3.2",
  "title": "",
  "body": "  In this exercise, you will calculate several Taylor polynomial approximations for and determine the radius of convergence for the Taylor series approximation centred at .     Compute the nd, th, th, and rd degree Taylor polynomial approximations of centred at . Assign each to a new name.      Plot and all four Taylor polynomial approximations on the same graph. How do the graphs of the Taylor polynomial approximations compare to as the degree increases?      In a new paragraph in your worksheet, state what you expect the radius of convergence to be for the Taylor series of centred at .    "
},
{
  "id": "act_taylor_series-4-3",
  "level": "2",
  "url": "act_taylor_series.html#act_taylor_series-4-3",
  "type": "Exercise",
  "number": "3.17.3.3",
  "title": "",
  "body": "  Because the higher derivatives of and both form predictable patterns when evaluated at , it is possible to write the Taylor series for these functions centred at in their compact forms:      Plot the first 51 nonzero terms of equation . Does this seem to confirm the radius of convergence you were expecting in exercise ?    The first 50 nonzero terms are given by . You may use the Sum() command or the palettes toolbar to create this expression in your plot() command.      Plot the first 51 nonzero terms of equation . Does this seem to confirm the radius of convergence you were expecting in exercise ?    "
},
{
  "id": "chp_review_integral",
  "level": "1",
  "url": "chp_review_integral.html",
  "type": "Chapter",
  "number": "4",
  "title": "Lab Test Review",
  "body": " Lab Test Review  The following exercises are provided as examples of potential questions on the final lab test at the end of the semester.    Riemann Sums    Assign the function in Maple. integral approximation Riemann sum  integral approximation ApproximateInt      Evaluate the Riemann sum over the interval using the method=lower option with partitions.           Evaluate the Riemann sum over the interval using the method=upper option with partitions.            Assign the following function in Maple: . integral approximation Riemann sum  integral approximation ApproximateInt      Give an approximate value of using the midpoint rule and partitions.           Give an approximate value of using the trapezoid rule and partitions.           Give an approximate value of using Simpson's rule and partitions.           Give the exact value of the definite integral and evaluate as a decimal with 15 digits.            Integral Approximation Techniques    Assign the function in Maple and plot it over the interval . integral      What is the derivative, ?           At what value in the interval does reach its maximum?           What is the maximum value of over the interval ?            Areas Between Curves    Assign the following function in Maple: .     Find the net area bounded by and the axis on the interval . integral net area            Find the total area bounded by and the axis on the interval . integral total area             Plot the region between the curves and and compute the area to digits. integral net area            Average Value of a Function    Find the average value of on the interval . average value of a function            Volumes of Revolution    Find the volume of the egg-shaped solid obtained by revolving the region bounded by the implicit curve about the -axis. volume of revolution            Find the volume of the solid obtained by revolving the region bounded by the curves and about the -axis. volume of revolution            Arc Length    Determine the arc length of the curve over the interval to digits. arc length            Infinite Integrals and Probability    At an annual triathlon, the finishing times for male athletes can be modeled by the probability density function , where seconds (the average finish time) and seconds (the standard deviation of finish times). Assign this function in Maple using the specified values of and and plot the function over the interval . integral improper  probability      What is the probability that a male athlete finishes the triathlon in under seconds ( hour)?           What is the probability that a male athlete finishes the triathlon in over seconds ( hour min)?           What is the probability that a male athlete takes between and seconds to finish the triathlon ( hour to hours)?            Differential Equations    After fish are introduced to a lake, the rate of growth for the population of fish is given by the differential equation , where is the population of fish after years. Define this differential equation in Maple. differential equations      Use dsolve() to give the solution to the differential equation for using the initial condition .           How many fish will there be after years (to the nearest fish)?           What does the population of fish approach after a long time?    You may need to take the limit as tends to infinity or determine the behaviour using a plot.            Taylor Series    Find the Taylor series expansion of centred at (Maclaurin series) and give the coefficient of the term. sequences and series Taylor and Maclaurin series            "
},
{
  "id": "chp_review_integral-3-1-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-1-2",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": "  Assign the function in Maple. integral approximation Riemann sum  integral approximation ApproximateInt      Evaluate the Riemann sum over the interval using the method=lower option with partitions.           Evaluate the Riemann sum over the interval using the method=upper option with partitions.         "
},
{
  "id": "chp_review_integral-3-1-3",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-1-3",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": "  Assign the following function in Maple: . integral approximation Riemann sum  integral approximation ApproximateInt      Give an approximate value of using the midpoint rule and partitions.           Give an approximate value of using the trapezoid rule and partitions.           Give an approximate value of using Simpson's rule and partitions.           Give the exact value of the definite integral and evaluate as a decimal with 15 digits.         "
},
{
  "id": "chp_review_integral-3-2-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-2-2",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": "  Assign the function in Maple and plot it over the interval . integral      What is the derivative, ?           At what value in the interval does reach its maximum?           What is the maximum value of over the interval ?         "
},
{
  "id": "chp_review_integral-3-3-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-3-2",
  "type": "Exercise",
  "number": "4.4",
  "title": "",
  "body": "  Assign the following function in Maple: .     Find the net area bounded by and the axis on the interval . integral net area            Find the total area bounded by and the axis on the interval . integral total area          "
},
{
  "id": "chp_review_integral-3-3-3",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-3-3",
  "type": "Exercise",
  "number": "4.5",
  "title": "",
  "body": "  Plot the region between the curves and and compute the area to digits. integral net area         "
},
{
  "id": "chp_review_integral-3-4-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-4-2",
  "type": "Exercise",
  "number": "4.6",
  "title": "",
  "body": "  Find the average value of on the interval . average value of a function         "
},
{
  "id": "chp_review_integral-3-5-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-5-2",
  "type": "Exercise",
  "number": "4.7",
  "title": "",
  "body": "  Find the volume of the egg-shaped solid obtained by revolving the region bounded by the implicit curve about the -axis. volume of revolution         "
},
{
  "id": "chp_review_integral-3-5-3",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-5-3",
  "type": "Exercise",
  "number": "4.8",
  "title": "",
  "body": "  Find the volume of the solid obtained by revolving the region bounded by the curves and about the -axis. volume of revolution         "
},
{
  "id": "chp_review_integral-3-6-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-6-2",
  "type": "Exercise",
  "number": "4.9",
  "title": "",
  "body": "  Determine the arc length of the curve over the interval to digits. arc length         "
},
{
  "id": "chp_review_integral-3-7-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-7-2",
  "type": "Exercise",
  "number": "4.10",
  "title": "",
  "body": "  At an annual triathlon, the finishing times for male athletes can be modeled by the probability density function , where seconds (the average finish time) and seconds (the standard deviation of finish times). Assign this function in Maple using the specified values of and and plot the function over the interval . integral improper  probability      What is the probability that a male athlete finishes the triathlon in under seconds ( hour)?           What is the probability that a male athlete finishes the triathlon in over seconds ( hour min)?           What is the probability that a male athlete takes between and seconds to finish the triathlon ( hour to hours)?         "
},
{
  "id": "chp_review_integral-3-8-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-8-2",
  "type": "Exercise",
  "number": "4.11",
  "title": "",
  "body": "  After fish are introduced to a lake, the rate of growth for the population of fish is given by the differential equation , where is the population of fish after years. Define this differential equation in Maple. differential equations      Use dsolve() to give the solution to the differential equation for using the initial condition .           How many fish will there be after years (to the nearest fish)?           What does the population of fish approach after a long time?    You may need to take the limit as tends to infinity or determine the behaviour using a plot.         "
},
{
  "id": "chp_review_integral-3-9-2",
  "level": "2",
  "url": "chp_review_integral-3.html#chp_review_integral-3-9-2",
  "type": "Exercise",
  "number": "4.12",
  "title": "",
  "body": "  Find the Taylor series expansion of centred at (Maclaurin series) and give the coefficient of the term. sequences and series Taylor and Maclaurin series         "
},
{
  "id": "sec_execution_groups",
  "level": "1",
  "url": "sec_execution_groups.html",
  "type": "Section",
  "number": "5.1",
  "title": "Execution Groups",
  "body": " Execution Groups  Maple input is used for computations and must use recognizable commands. Maple output gives the result of the computation after hitting the Enter key. Together, Maple input and output are called an execution group .   Place a new execution group after the current line with the button in the top insert menu.     Place a new execution group after the current line with Ctrl+J.    Place a new execution group before the current line with Ctrl+K.     Maple input is preceded by the character (sometimes called a \"carrot\"). Maple output is displayed in the centre of the following line.    2 + 2;     8 \/ 2;    If at any point you wish to correct a previous Maple input line, you may simply go back to that line and modify it. However, there will be no change to the output until you hit Enter. You do not need to be at the end of the line in order to run it.  You may wish to have more than one calculation or command on a single Maple input. For more information on this, see .  "
},
{
  "id": "sec_paragraphs",
  "level": "1",
  "url": "sec_paragraphs.html",
  "type": "Section",
  "number": "5.2",
  "title": "Paragraphs",
  "body": " Paragraphs    Paragraphs are used for text, rather than for computation. Hitting Enter simply creates a new line of text and does not try to display a result.   Create new text after the current line with the button in the top insert menu.     Create new text after the current line with Ctrl+Shift+J.    Create new text before the current line with Ctrl+Shift+K.     "
},
{
  "id": "sec_deleting_inputs",
  "level": "1",
  "url": "sec_deleting_inputs.html",
  "type": "Section",
  "number": "5.3",
  "title": "Deleting Inputs",
  "body": " Deleting Inputs  Delete a section of Maple Input or Text using Ctrl+Delete. You will notice that hitting backspace will not delete a section by default.  It's a good habit to delete unnecessary Maple inputs.  "
},
{
  "id": "sec_three_font_styles",
  "level": "1",
  "url": "sec_three_font_styles.html",
  "type": "Section",
  "number": "5.4",
  "title": "Three Font Styles",
  "body": " Three Font Styles  There are two font styles that are commonly used in execution groups.   While 2D Math has the advantage of looking prettier, it often treats spaces as multiplication and it doesn't always treat brackets as multiplication when desired. Maple Input causes fewer issues with how Maple interprets but it often requires the use of many more parenthesis. This lab manual will make frequent use of Maple Input for clarity, but you will likely use 2D Math for most of your exercises.       2D Math (the default in modern versions)   In this mode, mathematical expressions are formatted nicely, as one would write them on paper.    Text will appear in italic , with the exception of common mathematical functions and constants.    An example of an expression in 2D Math: .    Switch to 2D Math using Ctrl+R.        Maple Input (the default for old versions)   In this mode, mathematical expressions are displayed inline, with no additional formatting.    All text is shown in monospaced font .    The above expression in Maple input:  x^5\/(exp(x)+sin(x))    Switch to Maple Input using Ctrl+M.        Finally, paragraphs use a third style of font.   It can be useful to switch to 2D Math in paragraphs for an expression or equation, then switch back to text afterwards.       Plain Text    In this mode, mathematical expressions are displayed inline, with no additional formatting.    All text is shown in a standard font, such as this line.    Switch to Plain Text using Ctrl+T.        "
},
{
  "id": "sec_using_sections",
  "level": "1",
  "url": "sec_using_sections.html",
  "type": "Section",
  "number": "5.5",
  "title": "Using Sections",
  "body": " Using Sections   Sections are groups of one or more execution groups or paragraphs that are indented together. At the top of a section, you can create a section title. An arrow to the left of the title will allow you to expand or collapse that section. Subsections may be created inside other sections.   You may wish to highlight several execution groups or paragraphs with the mouse before combining them into one section.      Use the button in the top toolbar to create a section.     Use Ctrl+. to enclose input in a section.    Use Ctrl+, to remove any section enclosing an input.     "
},
{
  "id": "sec_palettes_toolbar",
  "level": "1",
  "url": "sec_palettes_toolbar.html",
  "type": "Section",
  "number": "5.6",
  "title": "Palettes Toolbar",
  "body": " Palettes Toolbar  You can open or close the palettes toolbar by clicking on the black arrows at the left side of the page.   Opening and closing the palettes toolbar.       With the palettes toolbar open, you can see several palettes that are available. These can be used to quickly access common operations and procedures by clicking on the appropriate buttons. Each palette can be expanded or closed. The Expression palette is especially useful for common functions.   Many common functions and operations are in the Expression and Calculus palettes.    "
},
{
  "id": "sec_palettes_toolbar-3",
  "level": "2",
  "url": "sec_palettes_toolbar.html#sec_palettes_toolbar-3",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " Opening and closing the palettes toolbar.      "
},
{
  "id": "sec_palettes_toolbar-5",
  "level": "2",
  "url": "sec_palettes_toolbar.html#sec_palettes_toolbar-5",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " Many common functions and operations are in the Expression and Calculus palettes.   "
},
{
  "id": "sec_algebraic_operations",
  "level": "1",
  "url": "sec_algebraic_operations.html",
  "type": "Section",
  "number": "6.1",
  "title": "Algebraic Operations",
  "body": " Algebraic Operations  At its elementary level, Maple can be used as a really large, powerful calculator. It can do any arithmetic operation including, but not limited to, addition (+), subtraction (-), multiplication (*), division (\/), powers (^), and other more complicated operations such as radicals (roots), logarithms, and exponentials. Anytime Maple performs an arithmetic operation, it is creating an expression .   a + b;       a - b;       a * b;       In 2D Math mode (the default font), it is also possible to perform multiplication by including a space between two variables. However, do not use brackets for multiplication. Maple has no way of knowing whether is meant as multiplication or as a function of .    a \/ b;       a ^ b;      "
},
{
  "id": "sec_maple_commands",
  "level": "1",
  "url": "sec_maple_commands.html",
  "type": "Section",
  "number": "6.2",
  "title": "Maple Commands",
  "body": " Maple Commands  If we wish to do anything more complicated than basic arithmetic in Maple, we likely need to use a special command to perform the desired task. Commands have two parts:   the command name : this is usually one or more words with no spaces that describes what the command does.    the parameters of the command: these are the objects that the command needs to be given so that it can complete its procedure.     The syntax of a command is as follows:   Never include a space between the name of the command and the parentheses around the parameters. Maple will erroneously treat this space as multiplication.    command( parameter1, parameter2, ... ) You should note that the parameters are always enclosed in parentheses ( ) and there is no space between the name of the command and the first parenthesis.  Some commands only need one parameter, while others need multiple parameters. In many cases, additional, optional parameters can be added to perform a more specialized procedure.  "
},
{
  "id": "sec_radical_functions",
  "level": "1",
  "url": "sec_radical_functions.html",
  "type": "Section",
  "number": "6.3",
  "title": "Radical Functions",
  "body": " Radical Functions  For your first commands, you should know how to type a square root or other root into Maple. The sqrt() command can be used for square roots, while it is usually better to use surd() for higher roots.   sqrt(a);    mathematical functions square root     The sqrt() command can also be found in the Expression palette by clicking . However, the surd() command is better than using the button in most cases.    surd(a, 3);    mathematical functions th root     surd(a, 4);       Note that capitalization is important in Maple. Capitalizing a character that is not supposed to be capitalized will result in an error or useless output.   "
},
{
  "id": "sec_absolute_value_function",
  "level": "1",
  "url": "sec_absolute_value_function.html",
  "type": "Section",
  "number": "6.4",
  "title": "Absolute Value Function",
  "body": " Absolute Value Function  The absolute value function in Maple can be typed out using the abs() command. There is also an absolute value button under the Expression palette if you prefer that method. mathematical functions absolute value    abs(a);      "
},
{
  "id": "sec_exponential_and_logarithmic_functions",
  "level": "1",
  "url": "sec_exponential_and_logarithmic_functions.html",
  "type": "Section",
  "number": "6.5",
  "title": "Exponential and Logarithmic Functions",
  "body": " Exponential and Logarithmic Functions  Another common command that we will frequently use is exp() . This is meant to be used as the natural exponential function. Unfortunately, simply typing in using the e key on the keyboard will not perform the correct operation. Instead, Maple treats e as it does any other letter, such as x or y . mathematical functions exponential  mathematical functions exponential function    The exp() command can also be found in the Expression palette by clicking the button. Similarly, you can get the numerical value by clicking on its button in the Common Symbols palette.    exp(a);      We will mostly be using the natural logarithm in calculus, but Maple provides commands for logarithms with different bases: mathematical functions logarithmic  mathematical functions logarithmic@natural logarithmic    ln(a);       log10(1000);      "
},
{
  "id": "sec_trigonometric_and_inverse_trigonometric_functions",
  "level": "1",
  "url": "sec_trigonometric_and_inverse_trigonometric_functions.html",
  "type": "Section",
  "number": "6.6",
  "title": "Trigonometric and Inverse Trigonometric Functions",
  "body": " Trigonometric and Inverse Trigonometric Functions  Trigonometric functions can be typed directly into a Maple input using parentheses. For inverse trigonometric functions, it is generally considered better to use the notation instead of notation. mathematical functions sine  mathematical functions cosine  mathematical functions tangent  mathematical functions cosecant  mathematical functions secant  mathematical functions cotangent  mathematical functions inverse sine  mathematical functions inverse cosine  mathematical functions inverse tangent  mathematical functions inverse cosecant  mathematical functions inverse secant  mathematical functions inverse cotangent    In recent versions of Maple, you can type and Maple will correctly interpret this as .   sin(x);  cos(x);  tan(x);  csc(x);  sec(x);  tan(x);  arcsin(x);  arccos(x);  arctan(x);  arccsc(x);  arcsec(x);  arccot(x);   "
},
{
  "id": "sec_other_common_functions",
  "level": "1",
  "url": "sec_other_common_functions.html",
  "type": "Section",
  "number": "6.7",
  "title": "Other Common Functions",
  "body": " Other Common Functions  Maple possesses many other useful built-in functions for performing common mathematical operations. They include, but are not limited to, commands that compute the factorial of a number, find the floor or ceiling of a numerical value, return the numerator or denominator of an expression, or determine the maximum or minimum of a collection of arguments. mathematical functions factorial  mathematical functions floor  mathematical functions minimum  mathematical functions maximum  mathematical functions ceiling  mathematical functions denominator  mathematical functions numerator    Factorial notation works much like algebraic operations and does not need parentheses. However, a factorial() command is also available.    5!;       floor(2.7);       ceil(3.3);       numer( 2*x\/(x^2+5) );       denom( 2x\/(x^2+5) );       max(1,2,3,4,5);       min(1,2,3,4,5);      "
},
{
  "id": "sec_maple_help",
  "level": "1",
  "url": "sec_maple_help.html",
  "type": "Section",
  "number": "6.8",
  "title": "Maple Help",
  "body": " Maple Help  If you would like more information about a particular command (for example, the sin() command), you can type a question mark followed by the command name:   ?sin   A help menu will open, which describes the required parameters in the order they must be listed, as well as a few examples. These examples can be very useful for more complicated procedures. There may also be several options described for you to customize the procedure. help   If you are unsure of the command name for a procedure that you think Maple should have built in, you can also search Maple help. For example,   ?gcd   will give a description of commands for finding the greatest common divisor and lowest common multiple of two values.  "
},
{
  "id": "sec_autocompleting_commands",
  "level": "1",
  "url": "sec_autocompleting_commands.html",
  "type": "Section",
  "number": "6.9",
  "title": "Autocompleting Commands",
  "body": " Autocompleting Commands  For convenience, Maple can automatically fill in the command that you wish to type. To do this, type in the first few letters of the command and then hit ESC.   Ctrl+Space is another shortcut for this feature, if you find it more convenient while typing.   For example, typing in exp and hitting ESC will provide the following list of commands.   Using autocomplete with ESC gives a menu of possible commands you are trying to use.    From here, you can select the exp command for the exponential function, or possibly the expand command, which we will look at later. If the command requires a parameter, it should already be highlighted so that you can type in its value. If a command has multiple parameters, you can hit the Tab key to highlight the next parameter.  "
},
{
  "id": "sec_autocompleting_commands-5",
  "level": "2",
  "url": "sec_autocompleting_commands.html#sec_autocompleting_commands-5",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " Using autocomplete with ESC gives a menu of possible commands you are trying to use.   "
},
{
  "id": "sec_multiple_commands_at_once",
  "level": "1",
  "url": "sec_multiple_commands_at_once.html",
  "type": "Section",
  "number": "6.10",
  "title": "Multiple Commands at Once",
  "body": " Multiple Commands at Once  As you may have noticed, each time that we have used Maple input in this tutorial, there is a semicolon ; at the end of the line. This used to be required in older versions of Maple, though it is no longer mandatory in modern versions. mathematical functions exponential  mathematical functions th root   The reason why the semicolon continues to be important is because it tells Maple when one command ends and another begins. You can use this to run multiple commands within one Maple input:   Multiple commands can be run at the same time by placing a semicolon ; in between them.    surd(x,3); exp(x);        If you use a full colon : instead of a semicolon, then the output of that command is hidden from the screen when it is executed.   "
},
{
  "id": "sec_ditto_operator",
  "level": "1",
  "url": "sec_ditto_operator.html",
  "type": "Section",
  "number": "6.11",
  "title": "The % Shortcut",
  "body": " The % Shortcut  Many of the exercises in the activities will involve executing multiple commands to obtain the answer. Often, this means running a command and then running a second command on the result of the first. Although copying and pasting the result from the first command takes less time than typing it out, it often causes many syntax problems. ditto operator   Fortunately, Maple provides us with the % shortcut, also called the ditto operator. Every time a command is run, its output is temporarily stored, much like a scientific calculator will remember what is currently on its screen. Using the % symbol within another command will use the result of the first command automatically.  The trouble with this shortcut comes from the fact that you can run Maple input anywhere on the page in any order ! In the example below, you will only get the correct output if you run the second line immediately after running the first line.   x^2 + 5;       sqrt(%);    mathematical functions square root    To make better use of the % shotcut, it is the best practice to combine the two consecutive commands on the same Maple input:   The % shorcut in Maple works much like the ANS button on many scientific calculators. The % will only remember the output of whatever input was run most recently.    x^2 + 5; sqrt(%);       "
},
{
  "id": "sec_expressing_as_decimal",
  "level": "1",
  "url": "sec_expressing_as_decimal.html",
  "type": "Section",
  "number": "7.1",
  "title": "Expressing a Result as a Decimal",
  "body": " Expressing a Result as a Decimal  Maple tries to use exact, symbolic values whenever it can. If you need a decimal representation of a value or expression, you can use the evalf() command as seen below. evalf    Maple will default to a decimal approximation anytime the input already uses decimals. For example, try sqrt(2.0) and see the result.    sqrt(2);    mathematical functions square root     evalf(sqrt(2));      It is often useful to give the exact value as well as the decimal approximation in one execution group, using the % shortcut:   Recall that using the % symbol within another command will use the result of the first command automatically.    sqrt(2); evalf(%);       By default, Maple will express a decimal with -digit accuracy. This default can be changed by assigning a new value to Digits , or you can specify the number of digits anytime you use the evalf() command.   The first letter of Digits must be capitalized and the assignment operator := is used to assign a value for the desired accuracy. The assignment operator := is explained in detail in .    Digits := 15;    Digits     Pi;    Pi     evalf(Pi);       evalf(Pi,50);      "
},
{
  "id": "sec_expanding_expressions",
  "level": "1",
  "url": "sec_expanding_expressions.html",
  "type": "Section",
  "number": "7.2",
  "title": "Expanding Expressions",
  "body": " Expanding Expressions  You can ask Maple to expand any expression with the expand() command, including products of polynomials and rational functions. Maple will also expand various logarithmic and trigonometric expressions. expand    The multiplication operation * (or a space in 2D Math mode) is not required between numerical coefficients and variables. However, multiplication between multiple variables is required.    expand((2*x + 3*y)^6);       expand(cos(2*x));    mathematical functions cosine     expand(tan(a + b));    mathematical functions tangent    "
},
{
  "id": "sec_factoring_expressions",
  "level": "1",
  "url": "sec_factoring_expressions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Factoring Expressions",
  "body": " Factoring Expressions  Maple can also factor expressions with the factor() command. It will factor polynomials (including those with multiple variables) and will even factor more complicated expressions (like those involving trig functions as seen below). factor    factor(x^2 - 1);       In some cases, Maple may factor the expression and perform some additional basic simplification.    factor((x^2 + 2*x - 15)\/(x^2 + 7*x + 10));       factor(sin(x)^2 - 3*sin(x) + 2);    mathematical functions sine     If Maple cannot factor the expression given, it will output the original expression.    factor(x^2 + 1);      Maple will factor expressions with multiple variables as well. Be sure to include multiplication (*) between variables.   factor(a^3 + 3*a^2*b + 3*a*b^2 + b^3);      "
},
{
  "id": "sec_simplifying_expressions",
  "level": "1",
  "url": "sec_simplifying_expressions.html",
  "type": "Section",
  "number": "7.4",
  "title": "Simplifying Expressions",
  "body": " Simplifying Expressions  Likewise, you can also simplify any expression with simplify() . This includes basic simplifications such as collecting like terms as well as more complicated algebraic simplifications such as cancelling and simplifying radicals, exponents, logarithms, trigonometric functions, etc. simplify    simplify(3*sin(x)^2 + 3*cos(x)^2);    mathematical functions sine     The simplify() command can sometimes produce unexpected results. In some cases, the factor() command may be more appropriate. In other cases, you may need to include some optional parameters in the command.    simplify(4*(tan(x)^2 + 1));    mathematical functions tangent  mathematical functions cosine     simplify(ln(3*x^3*y));    mathematical functions logarithmic@natural logarithmic    Sometimes additional parameters need to be supplied in order for Maple to simplify the expression as you intend. In the simplify() command below, we add the assumption that all variables are positive so that and are defined.   simplify(ln(3*x^3*y), assume=positive);    assume    "
},
{
  "id": "sec_plotting_a_single_function",
  "level": "1",
  "url": "sec_plotting_a_single_function.html",
  "type": "Section",
  "number": "8.1",
  "title": "Plotting a Single Function",
  "body": " Plotting a Single Function  You can plot a function in Maple by using the plot() command. The only required parameter is the function you wish to plot. However, there are many additional parameters you can add to customize the way that the graph looks.   By default, Maple will plot trigonometric functions with an -axis from to .    plot( sin( cos(x) ) );    It is often useful to specify the interval for the -axis. Choose left and right endpoints for the -axis that are appropriate for your graph. plot axes intervals    If you are plotting a function of , then make sure to specify the interval as t=a..b .    plot(sin(cos(x)), x=-10..10);    The order of the parameters in the plot() command is important. The interval for the -axis must be listed before the interval for the -axis.  You can also specify the interval for the -axis for your graph. plot axes intervals   plot(sin(cos(x)), x=-10..10, y=-5..5);    "
},
{
  "id": "sec_common_plot_options",
  "level": "1",
  "url": "sec_common_plot_options.html",
  "type": "Section",
  "number": "8.2",
  "title": "Common Plot Options",
  "body": " Common Plot Options   Table lists the most frequently used optional parameters.   Plotting commands generate graphs by connecting many points together. The number of points generated is typically more than sufficient. However, setting numpoints = 30000 may help if a graph does not appear smooth. Using too large of a value may cause Maple to become unresponsive (see ).    A list of common optional parameters for the plot() command  plot axes intervals  plot colours  plot discontinuities  plot line style  plot gridlines  plot plot resolution  plot plot resolution  plot scaling      Parameter  Description    x=a..b  Plot over the interval .    y=c..d  Plot over the interval .    colour= cname  Specify the colour of the graph. A list of plot colours can be found by typing ?colours on a new Maple input.    discont=true  Show discontinuities in a function. This may need to be included to properly display the discontinuities in certain functions when you plot them.    linestyle= lstyle  Specify the style of the line ( solid , dash , dot , etc.).    gridlines=true  Include gridlines.    numpoints= n  Set the minimum number of points plotted for a smoother graph (Default ).    grid=[ m ,n ]  Set the number of initial points used to plot a graph (Default ).    scaling=constrained  Force axes to use the same scale (so a circle should appear perfectly round).     For some functions with vertical asymptotes, Maple does not always display the discontinuities correctly. Setting the parameter discont=true may properly display the discontinuities in these functions.   Without setting discont=true , some versions of Maple will display the graph of as a continuous function.     plot(tan(x), x=-2*Pi..2*Pi, y=-10..10, linestyle=dash, discont=true);    In some modern versions of Maple, the graph of above can be obtained even without including the discont=true option in the plot() command.  An example of a function that cannot be properly displayed without the discont=true parameter can be found in .  "
},
{
  "id": "tbl_plot_options",
  "level": "2",
  "url": "sec_common_plot_options.html#tbl_plot_options",
  "type": "Table",
  "number": "8.1",
  "title": "A list of common optional parameters for the <code class=\"code-inline tex2jax_ignore\">plot()<\/code> command",
  "body": " A list of common optional parameters for the plot() command  plot axes intervals  plot colours  plot discontinuities  plot line style  plot gridlines  plot plot resolution  plot plot resolution  plot scaling      Parameter  Description    x=a..b  Plot over the interval .    y=c..d  Plot over the interval .    colour= cname  Specify the colour of the graph. A list of plot colours can be found by typing ?colours on a new Maple input.    discont=true  Show discontinuities in a function. This may need to be included to properly display the discontinuities in certain functions when you plot them.    linestyle= lstyle  Specify the style of the line ( solid , dash , dot , etc.).    gridlines=true  Include gridlines.    numpoints= n  Set the minimum number of points plotted for a smoother graph (Default ).    grid=[ m ,n ]  Set the number of initial points used to plot a graph (Default ).    scaling=constrained  Force axes to use the same scale (so a circle should appear perfectly round).    "
},
{
  "id": "sec_plotting_multiple_functions",
  "level": "1",
  "url": "sec_plotting_multiple_functions.html",
  "type": "Section",
  "number": "8.3",
  "title": "Plotting Multiple Functions",
  "body": " Plotting Multiple Functions  You can also plot multiple expressions and functions on the same graph using the plot() command. Instead of specifying a single function as your first parameter, create a list of functions using square brackets.  Similarly, instead of specifying a single colour, specify a list of colours using square brackets. The order of the functions matches the order of the colours.   If a list of colours is not specified when plotting multiple functions on the same graph, it may be difficult to match each curve to its corresponding function. The first three colours in Maple's default palette are dull shades of red, blue, and green.    plot( [exp(x), sin(x) + cos(x)], x=-10..10, y=-5..5, colour=[black, blue] );    If you need several complicated graphs to display at once, you may wish to explore the potential of the display() command, found in .  "
},
{
  "id": "sec_assigning_expressions",
  "level": "1",
  "url": "sec_assigning_expressions.html",
  "type": "Section",
  "number": "9.1",
  "title": "Assigning Expressions",
  "body": " Assigning Expressions  Having to retype the same expression multiple times is tedious, but using copy and paste in Maple can sometimes produce unwanted effects. A better way to reuse an expression multiple times is to assign a name to it. You can assign any expression to a name of your choice (with some exceptions that Maple has protected) by using the := operator. assignment operator    Protected names include common functions such as exp . For example, mathematical functions exponential    exp := 2*x;   would cause an error.    poly := 3*x^4 - 2*x + 1;       poly;       Never assign anything to single-letter names such as or . It is best to keep single letters as arbitrary variables.    poly^2;       expr := (4^x - x^4) \/ exp(x + 1);       It is important to assign expressions to names that make sense to you and are easy to remember. It is also recommended not to reuse a name in the same document. If you assign a new expression to an old name, the new expression will overwrite what was previously assigned.    expr;       sqrt(expr);    mathematical functions square root    "
},
{
  "id": "sec_making_substitutions",
  "level": "1",
  "url": "sec_making_substitutions.html",
  "type": "Section",
  "number": "9.2",
  "title": "Making a Substitution into an Expression",
  "body": " Making a Substitution into an Expression  Let's suppose you have assigned an expression a name, and wish to replace one of its variables with a value or expression. As an example, we will assign an expression a name of expr and then substitute the numerical value for , which is denoted as Pi in Maple, into expr . The command used to substitute a value into an expression is subs() .   expr := sin(x) - 1;    mathematical functions sine      Pi Always be sure to use a capital P in Pi for the mathematical constant. You can also find in the palettes toolbar.    subs(x = Pi, expr);      The order of the parameters in the subs() command is important. For example, giving the expression before the substitution will give an error:   subs(expr,x = Pi);  Error, invalid input: subs received sin(x)-1, which is not valid for its 1st argument   You can make use of the % shortcut if you wish, but recall that it is best used on the same Maple input: ditto operator    x^2 + 3*x - 4; subs(x = 2, %);         You can also substitute one expression into another:   Note that using the subs() command does not permanently assign the substitution.    expr2 := tan(2*x) + 1;    mathematical functions tangent     subs(x = a+h, expr2);      "
},
{
  "id": "sec_defining_functions",
  "level": "1",
  "url": "sec_defining_functions.html",
  "type": "Section",
  "number": "9.3",
  "title": "Defining Functions and Using Function Notation",
  "body": " Defining Functions and Using Function Notation  Instead of defining an expression, it is sometimes more useful to define a function. A function specifies the variables that are included in the expression. This allows us to substitute values into our functions easily using function notation, such as .   If you have properly defined a function, you should see an arrow ( ) in your output. If you do not see an arrow within the output, then you have not defined the function properly.    f(x) := sin(x) - exp(x);    mathematical functions sine  mathematical functions exponential    Make sure that the variable in the function name matches the variable in the function, since we often use functions of or other variables besides .   g(t) := -4.9*t^2 + 5*t + 20;      A function's name does not have to be a single letter. In fact, it is often a good idea to have a function's name correspond to what the function represents.   area(r) := Pi*r^2;    mathematical functions Pi     There is also a shortcut for defining a function in the palettes toolbar. In this notation, is the variable and is the definition of the function.    Once we have defined a function, we can use function notation much like we would in class. For example, now that is defined, rather than using the subs() command to substitute into the function, we can now simply type .   f(0);      It is easy to substitute an expression into a function using function notation.   h(x) := 2*x^2 - 3*x;       h(x+1);      "
},
{
  "id": "sec_operations_on_functions",
  "level": "1",
  "url": "sec_operations_on_functions.html",
  "type": "Section",
  "number": "9.4",
  "title": "Operations on Functions",
  "body": " Operations on Functions  Once one or more functions are assigned, we can use commands on those functions for various options, such as plotting them. plot  plot axes intervals    f(x) := 2*x^3;       plot(f(x), x=-5..5);    Multiple functions can be combined through composition to create new expressions.   g(t) := t+1;       f(g(t)); expand(%);    expand      Average Rate of Change of a Function over an Interval  In this example, we will find the average rate of change of the function over the interval . We begin by defining the function:   f(x) := -2*x^3 + 25*x^2 + 15;      Once the function is defined, we can calculate the average rate of change over an interval by using the formula . In this case, we let and :   (f(7) - f(2))\/(7 - 2);      The average rate of change over the interval is . The units of this rate would be given in (units of )\/(units of ).    Plotting Transformations of Functions  Suppose that we start with a sinusoidal function with amplitude and period .   g(x) := 2*sin(Pi*x); plot( g(x), x=0..4, y=-4..4 );    plot  Pi  plot axes intervals     We can then plot the original function and and the transformation on the same axes to see that the amplitude has been halved. plot multiple functions    plot( [g(x), 0.5*g(x)], x=0..4, y=-4..4);    We can also see how an absolute value transformation of compares to the original function. The result here is known as a fully rectified sine wave. mathematical functions absolute value  plot axes intervals  plot multiple functions    plot( [ g(x), abs(g(x)) ], x=0..4, y=-4..4);     "
},
{
  "id": "ex_average_value",
  "level": "2",
  "url": "sec_operations_on_functions.html#ex_average_value",
  "type": "Example",
  "number": "9.1",
  "title": "Average Rate of Change of a Function over an Interval.",
  "body": " Average Rate of Change of a Function over an Interval  In this example, we will find the average rate of change of the function over the interval . We begin by defining the function:   f(x) := -2*x^3 + 25*x^2 + 15;      Once the function is defined, we can calculate the average rate of change over an interval by using the formula . In this case, we let and :   (f(7) - f(2))\/(7 - 2);      The average rate of change over the interval is . The units of this rate would be given in (units of )\/(units of ).  "
},
{
  "id": "ex_plotting_transformations",
  "level": "2",
  "url": "sec_operations_on_functions.html#ex_plotting_transformations",
  "type": "Example",
  "number": "9.2",
  "title": "Plotting Transformations of Functions.",
  "body": " Plotting Transformations of Functions  Suppose that we start with a sinusoidal function with amplitude and period .   g(x) := 2*sin(Pi*x); plot( g(x), x=0..4, y=-4..4 );    plot  Pi  plot axes intervals     We can then plot the original function and and the transformation on the same axes to see that the amplitude has been halved. plot multiple functions    plot( [g(x), 0.5*g(x)], x=0..4, y=-4..4);    We can also see how an absolute value transformation of compares to the original function. The result here is known as a fully rectified sine wave. mathematical functions absolute value  plot axes intervals  plot multiple functions    plot( [ g(x), abs(g(x)) ], x=0..4, y=-4..4);    "
},
{
  "id": "sec_piecewise",
  "level": "1",
  "url": "sec_piecewise.html",
  "type": "Section",
  "number": "9.5",
  "title": "Assigning Piecewise Functions",
  "body": " Assigning Piecewise Functions  A piecewise-defined function is a function defined by multiple sub-functions. Each sub-function applies to a certain interval of the domain, called a sub-domain. We can define piecewise functions in Maple by using the piecewise() command. The sub-domain of each sub-function is specified before its expression. mathematical functions piecewise    P(x) := piecewise(x <= -1, x^2, -1 < x <= 1, -x, 1 < x, x-4);       P(x);      "
},
{
  "id": "sec_functions_multiple_variables",
  "level": "1",
  "url": "sec_functions_multiple_variables.html",
  "type": "Section",
  "number": "9.6",
  "title": "Functions of More than One Variable",
  "body": " Functions of More than One Variable  We can also define functions of multiple variables and use the notation the same way as one variable functions. mathematical functions multivariable functions    g(x,y) := sin(x) - cos(y);    mathematical functions sine  mathematical functions cosine    This function may be evaluated at a point, given as an ordered pair:   g(0, Pi);    Pi    An example of a function of more than one variable is the volume of a circular cylinder.   cylindervol(r,h) := Pi*r^2*h;    Pi     cylindervol(3,5);      "
},
{
  "id": "sec_display_command",
  "level": "1",
  "url": "sec_display_command.html",
  "type": "Section",
  "number": "9.7",
  "title": "Assigning Plots and the <code class=\"code-inline tex2jax_ignore\">display()<\/code> Command",
  "body": " Assigning Plots and the display() Command  You can use the assignment operator to assign just about any type of output to a variable name, including plots. This can be useful when different types of plots need to be displayed on the same graph. You can assign the output of several plot() commands to variables and then 'display' them all on the same set of axes.  To make use of the display() command, you need to include the plots package. Packages are loaded using the with() command, where the name of the package appears within the parentheses. packages plots  packages with   A package does not need to be loaded more than once in your document. However, you will need to reload the package if you have previously closed the document.   with( plots );      Loading a package will typically display all of the commands that are included in the package. However, if a full colon is added, then the package is loaded but the output is hidden.   with( plots ):   With the plots package loaded, plotting options can be defined for each plot individually and assigned to a name. Full colons are recommended at the end of each line to hide the output of the individual plot. The display() command handles the job of combining the output of the multiple plots together. plot  plot axes intervals  plot line style  display    p1(x) := (x+2)^2 + 2*(x+2) - 5;       p2(x) := 3*(x-4)^3 - 2*(x-4)^2 - (x-4) + 1;       p3(x) := x - 3;       A := plot(p1(x), x=-6..0, y=-6..3, linestyle=dot):  B := plot(p2(x), x=-0..10, y=-10..10, style=point):  C := plot(p3(x), x=-10..10, y=-10..10):  display([A,B,C]);    "
},
{
  "id": "sec_assigning_equations",
  "level": "1",
  "url": "sec_assigning_equations.html",
  "type": "Section",
  "number": "10.1",
  "title": "Assigning Equations",
  "body": " Assigning Equations  The assignment operator := can be used to assign a name to nearly any type of output. Often, it is useful to assign an equation (involving a regular sign) a name. Some of the operations that we discussed in (such as simplifying, expanding, substituting, etc.) can then be applied to that equation.  Recall that represents a circle of radius 5 centred at the origin.   circle := x^2 + y^2 = 25;      The point lies on this circle because and satisfy the equation.   subs(x = 3, y = 4, circle);    subs    Here we can see that it is possible to add or subtract a value from both sides of an equation and factor the result.   eqn := x^4 + 1 = 2*x^2;       eqn - 2*x^2; factor(%);    factor     "
},
{
  "id": "sec_two_types_of_solvers",
  "level": "1",
  "url": "sec_two_types_of_solvers.html",
  "type": "Section",
  "number": "10.2",
  "title": "Two Types of Solvers",
  "body": " Two Types of Solvers   In most of the exercises in the activities, you may ignore complex solutions involving .   We will make use of two different equations solvers in Maple. Each solver behaves quite differently and has its own strengths and weaknesses.    solve()  solving equations solve   This solver attempts to solve an equation and then display the solutions in their exact form.  This solver will give both real and complex solutions. Complex solutions will involve the imaginary value .  Solutions to high-degree polynomials can be very large and may be displayed symbolically using RootOf placeholders.       fsolve()  solving equations fsolve   This solver uses numerical approximation methods and displays the solutions in decimal form.  This solver will give real solutions only.  The number of digits displayed for a numerical value will be determined by the number assigned to Digits .  Some solutions may not be found by the methods used by the solver.       It is a good idea to see the output of both solvers to decide which output is more useful. A good strategy is to use solve() and see if the output is helpful. If it is not, then you can go back to your command, change it to fsolve() , and rerun the new command.  "
},
{
  "id": "sec_solving_an_equation_of_one_variable",
  "level": "1",
  "url": "sec_solving_an_equation_of_one_variable.html",
  "type": "Section",
  "number": "10.3",
  "title": "Solving an Equation of One Variable",
  "body": " Solving an Equation of One Variable  The parameters of solve() and fsolve() are the same in most cases. You must include the equation to be solved and you can specify the variable that you wish to solve for.   solve(x^2 = 5, x);       fsolve(x^2 = 5, x);      If there is only one variable in the equation, then it is not necessary to specify the desired variable.   It may not make sense to use both  solve() and fsolve() . Choose the solver that produces the most useful output.    solve(x^2 = 5);       fsolve(x^2 = 5);      If you provide solve() or fsolve() with an expression rather than an equation , then the solver will set that expression equal to and solve the resulting equation.   Note that solve(x^2 - 5) is equivalent to typing solve(x^2 - 5 = 0, x) .    solve(x^2 - 5, x);       fsolve(x^2 - 5, x);      Maple will give complex solutions using when using solve() . Typically, fsolve() will not display complex solutions.   poly := 12*x^3-14*x^2+13*x-6;       factor(poly = 0);       solve(poly = 0, x);       fsolve(poly = 0, x);      When trying to solve high-degree polynomials, solutions may be displayed symbolically using solve() , while fsolve() may display a more useful output.   high := x^4 + 133*x + 200;       solve(high);    Sometimes when Maple cannot solve an expression algebraically, the solve() command will output a symbolic solution, using RootOf() to describe the solution. In these cases, you may wish to try the fsolve() command instead.    This output is Maple's way of representing four solutions to the quartic symbolically. Switching to fsolve() , we see only two real solutions. The other two solutions are either complex or were not found using the methods used in fsolve() .   fsolve(high);      When using the fsolve() command, you may also specify an interval in which to look for a solution. In this example, solutions will only be found on the interval .   fsolve(cos(x) = tan(x), x = 5..10);       Finding the Intersection of Two Functions  In this example, we will find the intersection point of and . mathematical functions sine  mathematical functions logarithmic@natural logarithmic  solving equations system    An even more efficient way of finding the point of intersection of two functions is to solve a system of two variables simultaneously. An example of this can be found in     f(x) := x*ln(x);       g(x) := sin(x);      Equating , we can use either solve() or fsolve() to obtain a solution. Since this is an equation in only, we will get the -coordinate of the point.   solve(f(x) = g(x));       fsolve(f(x) = g(x));      We can use this result and substitute into or to determine the corresponding -coordinate.   f(%);      So, the point of intersection is . This can be verified by plotting both functions.   plot( [f(x), g(x)], x=0..2);    Note that while it appears that there is another intersection point at , is undefined.   "
},
{
  "id": "ex_functionintersection",
  "level": "2",
  "url": "sec_solving_an_equation_of_one_variable.html#ex_functionintersection",
  "type": "Example",
  "number": "10.1",
  "title": "Finding the Intersection of Two Functions.",
  "body": " Finding the Intersection of Two Functions  In this example, we will find the intersection point of and . mathematical functions sine  mathematical functions logarithmic@natural logarithmic  solving equations system    An even more efficient way of finding the point of intersection of two functions is to solve a system of two variables simultaneously. An example of this can be found in     f(x) := x*ln(x);       g(x) := sin(x);      Equating , we can use either solve() or fsolve() to obtain a solution. Since this is an equation in only, we will get the -coordinate of the point.   solve(f(x) = g(x));       fsolve(f(x) = g(x));      We can use this result and substitute into or to determine the corresponding -coordinate.   f(%);      So, the point of intersection is . This can be verified by plotting both functions.   plot( [f(x), g(x)], x=0..2);    Note that while it appears that there is another intersection point at , is undefined.  "
},
{
  "id": "sec_solving_a_system",
  "level": "1",
  "url": "sec_solving_a_system.html",
  "type": "Section",
  "number": "10.4",
  "title": "Solving a System of Equations in Multiple Variables",
  "body": " Solving a System of Equations in Multiple Variables  We can also solve a system of equations by placing the various equations in a list (by using curly brackets) inside the solve() command. solving equations system    eq1 := x - y = 2;       eq2 := y = x^2 - 4;       solve( {eq1, eq2}, {x, y});       Finding the Intersection of Two Functions (Continued)  Using a system of equations, we can complete the example from with either a single solve() or fsolve() command. solving equations solve  solving equations system  mathematical functions logarithmic@natural logarithmic  mathematical functions sine    solve( {y = x*ln(x), y = sin(x)}, {x,y} );    Once again, we may find that fsolve() provides a more useful output.   fsolve( {y = x*ln(x), y = sin(x)}, {x,y} );       "
},
{
  "id": "ex_solvesystem",
  "level": "2",
  "url": "sec_solving_a_system.html#ex_solvesystem",
  "type": "Example",
  "number": "10.2",
  "title": "Finding the Intersection of Two Functions (Continued).",
  "body": " Finding the Intersection of Two Functions (Continued)  Using a system of equations, we can complete the example from with either a single solve() or fsolve() command. solving equations solve  solving equations system  mathematical functions logarithmic@natural logarithmic  mathematical functions sine    solve( {y = x*ln(x), y = sin(x)}, {x,y} );    Once again, we may find that fsolve() provides a more useful output.   fsolve( {y = x*ln(x), y = sin(x)}, {x,y} );      "
},
{
  "id": "sec_limits_tutorial",
  "level": "1",
  "url": "sec_limits_tutorial.html",
  "type": "Section",
  "number": "11.1",
  "title": "Limits",
  "body": " Limits  We can use the limit() command to evaluate the limit of a function as approaches . The limit() command needs two parameters. The first parameter is the expression and the second parameter gives the value for a variable to approach. limit    There is a convenient shortcut for limits found on the palettes toolbar. limit     The order of the parameters in the limit() command is important. An error message will be displayed if you switch the order of the parameters in the command and then try to execute it.  f(x) := x^2 + 2*x -4;      limit(f(x), x=3);      In this next example, it is important to note that here means that  approaches  , but we are not simply substituting into the expression. In fact, this expression is undefined at .   limit((f(x+h) - f(x))\/h, h=0);      "
},
{
  "id": "sec_one_sided_limits",
  "level": "1",
  "url": "sec_one_sided_limits.html",
  "type": "Section",
  "number": "11.2",
  "title": "One-Sided Limits",
  "body": " One-Sided Limits  For one-sided limits, you will need to add an additional parameter to the limit() command, specifying which side (left or right) to approach the value from. In the case of a vertical asymptote, these limits will be equal to .   L(x) := 1\/x;       Some versions of Maple may not properly display graphs of functions that contain vertical asymptotes. Include discont=true as a parameter in the plot( ) command when required. plot discontinuities     plot(L(x), x=-3..3, y=-5..5);     limit(L(x), x=0, right);    limit one-sided     limit(L(x), x=0, left);    limit one-sided     Vertical Asymptotes and One-Sided Limits  In this example, we will examine a rational function and use limits to determine its vertical asymptotes.   f(x) := (x^2-x-6)\/(x^2-8*x+15);      We can factor the denominator to find the domain of and predict where we might find vertical asymptotes. There is a useful denom() command for this that we can use for the denominator of . mathematical functions denominator    factor( denom( f(x) ) );      It looks like and are not in the domain of , though it is not clear if they are vertical asymptotes. We can find the limit of as .   limit(f(x), x=3);      Since this limit exists but does not, this is a removable discontinuity and not a vertical asymptote. Now we can find the limit of as .   limit(f(x), x=5);      Even though this limit does not exist, we cannot automatically conclude that has a vertical asymptote at . We need to compute the one-sided limits to see if there is asymptotic behaviour.   Maple provides an Asymptotes() command that you can investigate using Maple help. Try typing ?Asymptotes to learn more.    limit(f(x), x=5, left);       limit(f(x), x=5, right);      Since these limits are given as , we know that has a vertical asymptote at .   "
},
{
  "id": "ex_vertical_asymptotes",
  "level": "2",
  "url": "sec_one_sided_limits.html#ex_vertical_asymptotes",
  "type": "Example",
  "number": "11.1",
  "title": "Vertical Asymptotes and One-Sided Limits.",
  "body": " Vertical Asymptotes and One-Sided Limits  In this example, we will examine a rational function and use limits to determine its vertical asymptotes.   f(x) := (x^2-x-6)\/(x^2-8*x+15);      We can factor the denominator to find the domain of and predict where we might find vertical asymptotes. There is a useful denom() command for this that we can use for the denominator of . mathematical functions denominator    factor( denom( f(x) ) );      It looks like and are not in the domain of , though it is not clear if they are vertical asymptotes. We can find the limit of as .   limit(f(x), x=3);      Since this limit exists but does not, this is a removable discontinuity and not a vertical asymptote. Now we can find the limit of as .   limit(f(x), x=5);      Even though this limit does not exist, we cannot automatically conclude that has a vertical asymptote at . We need to compute the one-sided limits to see if there is asymptotic behaviour.   Maple provides an Asymptotes() command that you can investigate using Maple help. Try typing ?Asymptotes to learn more.    limit(f(x), x=5, left);       limit(f(x), x=5, right);      Since these limits are given as , we know that has a vertical asymptote at .  "
},
{
  "id": "sec_limits_at_infinity",
  "level": "1",
  "url": "sec_limits_at_infinity.html",
  "type": "Section",
  "number": "11.3",
  "title": "Limits at Infinity",
  "body": " Limits at Infinity  limit at infinity  To take the limit of a function as becomes infinitely large, Maple recognizes infinity and -infinity . These can be used to find horizontal asymptotes. If the function does not have a horizontal asymptote, the limit may result in .   g(x) := (3*x^2 + 5*x - 10) \/ (5*x^2 - 20*x + 1);       limit(g(x), x=infinity);      An oscillating function such as may not have a definable limit. Maple will attempt to determine a range for the minimum and maximum of the function.   h(x) := sin(x);       Since oscillates between and , Maple cannot determine a unique value for the limit as .    limit(h(x), x=-infinity);       Horizontal Asymptotes and Limits at Infinity  In this example, we will examine the function , which is known as a logistic function. Logistic functions have many applications, such as population modeling. mathematical functions logistic function  mathematical functions exponential function  plot    logistic(t) := 2000\/(1 + exp(-t+2));       plot(logistic(t));    Judging by the plot of the logistic function, it appears that the function may have horizontal asymptotes. To find the right-hand asymptote, we take the limit as . Here we are using t=infinity rather than x=infinity , since the variable of this function is .   limit(logistic(t), t=infinity);      To find the left-hand asymptote, we take the limit as .   limit(logistic(t), t=-infinity);       "
},
{
  "id": "ex_horizontal_asymptotes",
  "level": "2",
  "url": "sec_limits_at_infinity.html#ex_horizontal_asymptotes",
  "type": "Example",
  "number": "11.2",
  "title": "Horizontal Asymptotes and Limits at Infinity.",
  "body": " Horizontal Asymptotes and Limits at Infinity  In this example, we will examine the function , which is known as a logistic function. Logistic functions have many applications, such as population modeling. mathematical functions logistic function  mathematical functions exponential function  plot    logistic(t) := 2000\/(1 + exp(-t+2));       plot(logistic(t));    Judging by the plot of the logistic function, it appears that the function may have horizontal asymptotes. To find the right-hand asymptote, we take the limit as . Here we are using t=infinity rather than x=infinity , since the variable of this function is .   limit(logistic(t), t=infinity);      To find the left-hand asymptote, we take the limit as .   limit(logistic(t), t=-infinity);      "
},
{
  "id": "sec_limits_and_piecewise_functions",
  "level": "1",
  "url": "sec_limits_and_piecewise_functions.html",
  "type": "Section",
  "number": "11.4",
  "title": "Limits and Piecewise Functions",
  "body": " Limits and Piecewise Functions  mathematical functions piecewise  A piecewise function is a good opportunity to practice plotting discontinuities and investigating one- and two-sided limits.   P(x) := piecewise(x <= -1, x^2, x <= 1, -x, 1 < x , x-4);       P(x);      It is necessary to include the discont=true parameter in the plot( ) command here so that the jump discontinuity is properly displayed in the graph of this piecewise function. Unfortunately, even with the discont=true option, Maple does not include an open dot at . plot  plot discontinuities    plot(P(x), x=-4..4, y=-5..5, discont=true);    A piecewise function such as this can provide some interesting results when looking at one- and two-sided limits. limit  limit one-sided    limit(P(x), x=1);       limit(P(x), x=1, left);       limit(P(x), x=1, right);      "
},
{
  "id": "sec_limit_methods_tutor",
  "level": "1",
  "url": "sec_limit_methods_tutor.html",
  "type": "Section",
  "number": "11.5",
  "title": "The Limit Methods Tutor",
  "body": " The Limit Methods Tutor  limit tutor  The Limit Methods tutor will walk you through each step needed to evaluate a limit, including all of the limit laws learned in class. The tutor will open in a new interactive window and will output all steps in your Maple worksheet once the window is closed.   Opening up the Limit Methods tutor using menus.     Opening up the Limit Methods tutor using commands. The Student[Calculus1] package is required.     Using Limit Laws for a One-sided Limit  limit tutor!one-sided  This example will illustrate all of the steps required to evaluate .  Begin by typing out the function, the variable name, and the value that you want the variable to approach. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication. The direction can be specified in the drop down menu to the right of the variable information.  Once you have completed these steps, hit Start to see the limit in the output preview. You can click on individual limit laws to see whether they apply to the given limit.   You may also simply click the Next Step or All Steps buttons to have Maple show you a step-by-step solution.        Using Limit Laws for a Limit at Infinity  limit tutor!at infinity  In this example, we will see all of the limit laws used to evaluate . Once again, you will need to type out commands such as sqrt() for square roots and include * for multiplication. In this case, we may use exponents for the square root. For a limit as or , Maple recognizes the word infinity .   With the initialization complete, you are free to use the Next Step and All Steps button to see how to evaluate the limit using limit laws.       "
},
{
  "id": "sec_limit_methods_tutor-4",
  "level": "2",
  "url": "sec_limit_methods_tutor.html#sec_limit_methods_tutor-4",
  "type": "Figure",
  "number": "11.3",
  "title": "",
  "body": " Opening up the Limit Methods tutor using menus.   "
},
{
  "id": "sec_limit_methods_tutor-5",
  "level": "2",
  "url": "sec_limit_methods_tutor.html#sec_limit_methods_tutor-5",
  "type": "Figure",
  "number": "11.4",
  "title": "",
  "body": " Opening up the Limit Methods tutor using commands. The Student[Calculus1] package is required.   "
},
{
  "id": "sec_limit_methods_tutor-6",
  "level": "2",
  "url": "sec_limit_methods_tutor.html#sec_limit_methods_tutor-6",
  "type": "Example",
  "number": "11.5",
  "title": "Using Limit Laws for a One-sided Limit.",
  "body": " Using Limit Laws for a One-sided Limit  limit tutor!one-sided  This example will illustrate all of the steps required to evaluate .  Begin by typing out the function, the variable name, and the value that you want the variable to approach. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication. The direction can be specified in the drop down menu to the right of the variable information.  Once you have completed these steps, hit Start to see the limit in the output preview. You can click on individual limit laws to see whether they apply to the given limit.   You may also simply click the Next Step or All Steps buttons to have Maple show you a step-by-step solution.      "
},
{
  "id": "sec_limit_methods_tutor-7",
  "level": "2",
  "url": "sec_limit_methods_tutor.html#sec_limit_methods_tutor-7",
  "type": "Example",
  "number": "11.6",
  "title": "Using Limit Laws for a Limit at Infinity.",
  "body": " Using Limit Laws for a Limit at Infinity  limit tutor!at infinity  In this example, we will see all of the limit laws used to evaluate . Once again, you will need to type out commands such as sqrt() for square roots and include * for multiplication. In this case, we may use exponents for the square root. For a limit as or , Maple recognizes the word infinity .   With the initialization complete, you are free to use the Next Step and All Steps button to see how to evaluate the limit using limit laws.      "
},
{
  "id": "sec_the_diff_command",
  "level": "1",
  "url": "sec_the_diff_command.html",
  "type": "Section",
  "number": "12.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\">diff()<\/code> Command",
  "body": " The diff() Command  derivative diff  The diff() command is probably the most basic way of finding the derivative of an expression. The first parameter is the expression to be differentiated and the second parameter is the variable that the expression is to be differentiated with respect to.   diff(arctan(t), t);    mathematical functions inverse tangent    If you have assigned a function, then make sure to use proper function notation inside the diff() command. As we will discover in , there is simpler method for evaluating derivatives using function notation.   f(x) := sin(x);    mathematical functions sine    Make sure that you are taking the derivative with respect to the desired variable. Assigning a name to the derivative allows you to more easily substitute values into the derivative and determine the slope of a tangent line at a given point.   deriv1 := diff(f(x), x);       slope := subs(x = Pi\/2, deriv1); simplify(%);    subs  Pi  simplify  ditto operator     Higher derivatives can be evaluated by applying the diff() command multiple times in a row. derivative diff!higher derivatives    diff(arctan(t), t); diff(%, t);       Higher derivatives can also be calculated in a single command by specifying the variable repetitively or using the $ notation, as shown below.   There are shortcuts for the diff() command that are found in the palettes toolbar. This includes higher derivatives as well.     diff(f(x), x, x);       diff(f(x), x$2);      "
},
{
  "id": "sec_derivs_using_function_notation",
  "level": "1",
  "url": "sec_derivs_using_function_notation.html",
  "type": "Section",
  "number": "12.2",
  "title": "Using Function Notation",
  "body": " Using Function Notation  derivative prime notation  If you have properly defined a function , you may also make use of the familiar notation used in class.   f(x) := sin(x) + x^2;    mathematical functions sine     f'(x);      This notation is especially useful for evaluating the derivative at a value, without using the subs() command separately.   While using is a common choice for slope, it is a good idea to avoid overusing it in your Maple worksheet. You may wish to use , , etc. when calculating the slopes of many tangent lines.    slope1 := f'(0);       slope2 := f'(Pi);    Pi    Higher derivatives are also notated in much the same way as in class. derivative prime notation!higher derivatives    f''(x);      Rather than using a string of tick marks, we use a raised exponent in parentheses to specify the th derivative. This notation can only be used in 2D Math mode.   f⁽³⁾(x);      "
},
{
  "id": "sec_applications_of_the_derivative",
  "level": "1",
  "url": "sec_applications_of_the_derivative.html",
  "type": "Section",
  "number": "12.3",
  "title": "Applications of the Derivative",
  "body": " Applications of the Derivative  In the examples below, we will apply the use of derivatives for common tasks related to the shapes of functions. These examples use function notation for derivatives, though the diff() command may also be used.   Finding the Equation of a Tangent Line  lines tangent line  In this example, we will find the equation of the tangent line to the function at . We start by assigning the function a name and determining its derivative.   f(x) := 6*sqrt(x) - 2*x;    mathematical functions square root     f'(x);      The -coordinate of at can be evaluated using simple function notation.   f(4);      Meanwhile, the slope of the tangent is the derivative of , evaluated at . Oddly enough, this value is easily simplified, but seems to require an additional simplify(%) command.   Sometimes Maple output can be easily simplified, using simplify(%) . Alternatively, an evalf(%) command would produce a decimal output.    f'(4); simplify(%);    simplify  ditto operator     The general equation of the tangent line to a differentiable function at is .  Applying this equation with , we obtain an equation of the tangent line. It can be useful to assign a name to this tangent line so that it may easily be plotted along with the original function. When calculating and plotting several tangent lines, make sure to name each one differently.   line := f'(4)*(x-4) + f(4);      This equation can be expanded into a standard form.   You can also try looking into the collect() command for collecting powers of in an expression. collect     expand(line);    expand    Notice that the line is only defined as an expression and is not in function notation. We can now plot the function and the line. plot  plot multiple functions  plot axes intervals    It is a good idea to specify plot colours, especially if plotting more than one tangent line on the same axes.    plot( [f(x),line], x=-1..10);      The Closed Interval Method for Min\/Max Problems  shapes of curves maximum  shapes of curves minimum  shapes of curves closed interval method  In this example, we will find the absolute minimum and maximum values of on the interval . It is best to define the function and plot it first to get an idea of where the critical numbers are located. plot  plot axes intervals    f(x) := (20 + 5*x^3 - x^4)\/sqrt(x^2 + 1);    mathematical functions square root     plot(f(x), x=-1.5..5.5);    By factoring the derivative, we can see that is a critical number. shapes of curves critical number    factor(f'(x));    factor     CN1 := 0      We can use the fsolve() command over smaller intervals to find the remaining critical numbers.   CN2:=fsolve(f'(x)=0, x=1..2);    solving equations fsolve  solving equations fsolve!interval     CN3:=fsolve(f'(x)=0, x=3..4);      To apply the closed interval method, we must evaluate the function at all critical numbers in the interval shapes of curves closed interval method    If a closed interval was not specified, we could use the second derivative test to find local minima and maxima.   f''(CN1); f''(CN2); f''(CN3);        Since is concave down at CN1 and CN3 , we have found two local maxima. Since is concave up at CN2 , we have found one local minimum.    f(CN1); f(CN2); f(CN3);        as well as the two endpoints.   evalf( f(-1) ); evalf( f(5) );    evalf     Comparing these values, we see that gives an absolute maximum of and that gives an absolute minimum of on the interval .   "
},
{
  "id": "ex_equation_of_tangent_line",
  "level": "2",
  "url": "sec_applications_of_the_derivative.html#ex_equation_of_tangent_line",
  "type": "Example",
  "number": "12.1",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line  lines tangent line  In this example, we will find the equation of the tangent line to the function at . We start by assigning the function a name and determining its derivative.   f(x) := 6*sqrt(x) - 2*x;    mathematical functions square root     f'(x);      The -coordinate of at can be evaluated using simple function notation.   f(4);      Meanwhile, the slope of the tangent is the derivative of , evaluated at . Oddly enough, this value is easily simplified, but seems to require an additional simplify(%) command.   Sometimes Maple output can be easily simplified, using simplify(%) . Alternatively, an evalf(%) command would produce a decimal output.    f'(4); simplify(%);    simplify  ditto operator     The general equation of the tangent line to a differentiable function at is .  Applying this equation with , we obtain an equation of the tangent line. It can be useful to assign a name to this tangent line so that it may easily be plotted along with the original function. When calculating and plotting several tangent lines, make sure to name each one differently.   line := f'(4)*(x-4) + f(4);      This equation can be expanded into a standard form.   You can also try looking into the collect() command for collecting powers of in an expression. collect     expand(line);    expand    Notice that the line is only defined as an expression and is not in function notation. We can now plot the function and the line. plot  plot multiple functions  plot axes intervals    It is a good idea to specify plot colours, especially if plotting more than one tangent line on the same axes.    plot( [f(x),line], x=-1..10);    "
},
{
  "id": "ex_closed_interval_method",
  "level": "2",
  "url": "sec_applications_of_the_derivative.html#ex_closed_interval_method",
  "type": "Example",
  "number": "12.2",
  "title": "The Closed Interval Method for Min\/Max Problems.",
  "body": " The Closed Interval Method for Min\/Max Problems  shapes of curves maximum  shapes of curves minimum  shapes of curves closed interval method  In this example, we will find the absolute minimum and maximum values of on the interval . It is best to define the function and plot it first to get an idea of where the critical numbers are located. plot  plot axes intervals    f(x) := (20 + 5*x^3 - x^4)\/sqrt(x^2 + 1);    mathematical functions square root     plot(f(x), x=-1.5..5.5);    By factoring the derivative, we can see that is a critical number. shapes of curves critical number    factor(f'(x));    factor     CN1 := 0      We can use the fsolve() command over smaller intervals to find the remaining critical numbers.   CN2:=fsolve(f'(x)=0, x=1..2);    solving equations fsolve  solving equations fsolve!interval     CN3:=fsolve(f'(x)=0, x=3..4);      To apply the closed interval method, we must evaluate the function at all critical numbers in the interval shapes of curves closed interval method    If a closed interval was not specified, we could use the second derivative test to find local minima and maxima.   f''(CN1); f''(CN2); f''(CN3);        Since is concave down at CN1 and CN3 , we have found two local maxima. Since is concave up at CN2 , we have found one local minimum.    f(CN1); f(CN2); f(CN3);        as well as the two endpoints.   evalf( f(-1) ); evalf( f(5) );    evalf     Comparing these values, we see that gives an absolute maximum of and that gives an absolute minimum of on the interval .  "
},
{
  "id": "sec_the_derivatives_tutor",
  "level": "1",
  "url": "sec_the_derivatives_tutor.html",
  "type": "Section",
  "number": "12.4",
  "title": "The Derivatives Tutor",
  "body": " The Derivatives Tutor  derivative tutor  The Derivatives tutor is a useful way for visualising the graphs of the first (and second) derivatives of a given function.   Opening up the Derivatives tutor using menus.     Opening up the Derivatives tutor using commands. The Student[Calculus1] package is required.     Visualising the Derivative of  This example will illustrate how to use the interactive derivatives viewer to visualise the derivatives of .  First, you will need to start by typing out the function in the tutor. Unfortunately, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  You will also need to give an interval . Without the palettes toolbar, you will need to type Pi for the mathematical constant. Pi    The Derivatives tutor displays the given function as well as (and if the box is ticked). You can optionally specify the axes ranges as well as scaling.    "
},
{
  "id": "sec_the_derivatives_tutor-4",
  "level": "2",
  "url": "sec_the_derivatives_tutor.html#sec_the_derivatives_tutor-4",
  "type": "Figure",
  "number": "12.3",
  "title": "",
  "body": " Opening up the Derivatives tutor using menus.   "
},
{
  "id": "sec_the_derivatives_tutor-5",
  "level": "2",
  "url": "sec_the_derivatives_tutor.html#sec_the_derivatives_tutor-5",
  "type": "Figure",
  "number": "12.4",
  "title": "",
  "body": " Opening up the Derivatives tutor using commands. The Student[Calculus1] package is required.   "
},
{
  "id": "sec_the_derivatives_tutor-6",
  "level": "2",
  "url": "sec_the_derivatives_tutor.html#sec_the_derivatives_tutor-6",
  "type": "Example",
  "number": "12.5",
  "title": "Visualising the Derivative of <span class=\"process-math\">\\((x-1)^2\\sin(x)\\)<\/span>.",
  "body": " Visualising the Derivative of  This example will illustrate how to use the interactive derivatives viewer to visualise the derivatives of .  First, you will need to start by typing out the function in the tutor. Unfortunately, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  You will also need to give an interval . Without the palettes toolbar, you will need to type Pi for the mathematical constant. Pi    The Derivatives tutor displays the given function as well as (and if the box is ticked). You can optionally specify the axes ranges as well as scaling.   "
},
{
  "id": "sec_the_differentiation_methods_tutor",
  "level": "1",
  "url": "sec_the_differentiation_methods_tutor.html",
  "type": "Section",
  "number": "12.5",
  "title": "The Differentiation Methods Tutor",
  "body": " The Differentiation Methods Tutor  The Differentiation Methods tutor is useful for showing each individual differentiation rule as a separate step when finding the derivative of a given function.   Opening up the Differentiation Methods tutor using menus.     Opening up the Differentiation Methods tutor using commands. The Student[Calculus1] package is required.     Differentiating using the Product, Power, and Cosine Rules  This example will use the differentiation methods tutor to show how various differentiation rules are applied to .  To begin, make sure that the function is typed in properly. You will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  You will also need to ensure that the correct variable is specified. Then you can click Start to begin.  If you are unsure which rule should be applied, you can ask for a hint.   Click on an appropriate differentiation rule to see the specific rule applied, along with the resulting expression. If a rule cannot be applied, then the tutor will provide additional hints.   With the product rule applied, you can continue on to use the power and cosine rules.        Differentiating by Simplifying and the Quotient Rule  This example will show how to rewrite in a simpler form in order to apply the quotient rule.  Once the function is typed in properly, make sure that the variable is properly set and click Start. In its original form, this expression requires both the product and quotient rules for differentiation. However, by rewriting , the expression can be simplified to only require a quotient rule,  This simplification can be done by selecting the Rewrite rule and applying the given change.   After applying the simplification, the quotient rule can be applied directly.   Applying the remaining differentiation rules is left as an exercise to the reader.   "
},
{
  "id": "sec_the_differentiation_methods_tutor-3",
  "level": "2",
  "url": "sec_the_differentiation_methods_tutor.html#sec_the_differentiation_methods_tutor-3",
  "type": "Figure",
  "number": "12.6",
  "title": "",
  "body": " Opening up the Differentiation Methods tutor using menus.   "
},
{
  "id": "sec_the_differentiation_methods_tutor-4",
  "level": "2",
  "url": "sec_the_differentiation_methods_tutor.html#sec_the_differentiation_methods_tutor-4",
  "type": "Figure",
  "number": "12.7",
  "title": "",
  "body": " Opening up the Differentiation Methods tutor using commands. The Student[Calculus1] package is required.   "
},
{
  "id": "sec_the_differentiation_methods_tutor-5",
  "level": "2",
  "url": "sec_the_differentiation_methods_tutor.html#sec_the_differentiation_methods_tutor-5",
  "type": "Example",
  "number": "12.8",
  "title": "Differentiating <span class=\"process-math\">\\(x^2\\cos(x)\\)<\/span> using the Product, Power, and Cosine Rules.",
  "body": " Differentiating using the Product, Power, and Cosine Rules  This example will use the differentiation methods tutor to show how various differentiation rules are applied to .  To begin, make sure that the function is typed in properly. You will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  You will also need to ensure that the correct variable is specified. Then you can click Start to begin.  If you are unsure which rule should be applied, you can ask for a hint.   Click on an appropriate differentiation rule to see the specific rule applied, along with the resulting expression. If a rule cannot be applied, then the tutor will provide additional hints.   With the product rule applied, you can continue on to use the power and cosine rules.      "
},
{
  "id": "sec_the_differentiation_methods_tutor-6",
  "level": "2",
  "url": "sec_the_differentiation_methods_tutor.html#sec_the_differentiation_methods_tutor-6",
  "type": "Example",
  "number": "12.9",
  "title": "Differentiating <span class=\"process-math\">\\(\\frac{\\sin(x)}{x\\tan(x)}\\)<\/span> by Simplifying and the Quotient Rule.",
  "body": " Differentiating by Simplifying and the Quotient Rule  This example will show how to rewrite in a simpler form in order to apply the quotient rule.  Once the function is typed in properly, make sure that the variable is properly set and click Start. In its original form, this expression requires both the product and quotient rules for differentiation. However, by rewriting , the expression can be simplified to only require a quotient rule,  This simplification can be done by selecting the Rewrite rule and applying the given change.   After applying the simplification, the quotient rule can be applied directly.   Applying the remaining differentiation rules is left as an exercise to the reader.  "
},
{
  "id": "sec_newtons_method",
  "level": "1",
  "url": "sec_newtons_method.html",
  "type": "Section",
  "number": "12.6",
  "title": "Newton’s Method",
  "body": " Newton's Method  Newton's method NewtonsMethod  Suppose we start with the function . The root of this function is , which is found by setting and solving for . To get decimal approximations for roots of functions, we can simply use the fsolve() command. mathematical functions exponential  solving equations fsolve    f(x) := exp(x) - 2;       fsolve(f(x) = 0);      Solvers such as the fsolve() command can find decimal approximations for roots such as this very quickly by employing efficient algorithms behind the scenes. In this section, we will use Newton's method, which is very efficient technique for finding roots. We need to load the Student[Calculus1] package before we use the NewtonsMethod() command. packages with  packages Student[Calculus1]   The NewtonsMethod() command must be given a function as well as an initial value for the variable. This initial value should usually be chosen to be close to where we guess that a root should be found. The method relies on calculating the root (or x-intercept) of the tangent line at the specified value, and iterates several times for each new root found. In most cases, the roots of these tangent lines quickly converge to a true root of the function.  Optional parameters may be included to change how the result is displayed and how many iterations of the method are performed. Newton's method NewtonsMethod!output options  Newton's method NewtonsMethod!iterations    A list of optional parameters for the NewtonsMethod() command      Parameter  Description    output = value  Outputs the numerical result of Newton's method.    output = plot  Outputs a plot showing the tangent line approximation approach to finding the root.    output = animation  Much like the plot output, only with each iteration as a separate frame.    output = sequence  Outputs the original guess and the result of each iteration of Newton's method.    iterations =  Specifies the number of iterations to perform in Newton's method.         For the function , we may start with an initial value of to see how Newton's method quickly iterates to give an accurate approximation of the root . Using the output=plot option shows how tangent lines are used to determine the root of in five iterations.   with(Student[Calculus1]):    NewtonsMethod(f(x), x=2, output=plot);    To see the decimal approximation of the root after each iteration, you may use the output=sequence option. The initial value is given first, along with the root after each of the five iterations. Newton's method NewtonsMethod!output options    NewtonsMethod(f(x), x=2, output=sequence);      The output option may be omitted if we wish to simply evaluate the root, which behaves much like using fsolve() to find a single root. For more accuracy, the algorithm can be run with additional iterations. Newton's method NewtonsMethod!iterations    NewtonsMethod(f(x), x=2);       NewtonsMethod(f(x), x=2, iterations=10);      You should try playing around with the various output options and setting the number of iterations to various values to see how quickly Newton's method can reach ten (or more) digits of accuracy.  "
},
{
  "id": "tbl_newtonsmethod_options",
  "level": "2",
  "url": "sec_newtons_method.html#tbl_newtonsmethod_options",
  "type": "Table",
  "number": "12.10",
  "title": "A list of optional parameters for the <code class=\"code-inline tex2jax_ignore\">NewtonsMethod()<\/code> command",
  "body": " A list of optional parameters for the NewtonsMethod() command      Parameter  Description    output = value  Outputs the numerical result of Newton's method.    output = plot  Outputs a plot showing the tangent line approximation approach to finding the root.    output = animation  Much like the plot output, only with each iteration as a separate frame.    output = sequence  Outputs the original guess and the result of each iteration of Newton's method.    iterations =  Specifies the number of iterations to perform in Newton's method.        "
},
{
  "id": "sec_implicit_functions",
  "level": "1",
  "url": "sec_implicit_functions.html",
  "type": "Section",
  "number": "13.1",
  "title": "Implicit Functions",
  "body": " Implicit Functions  An implicit function defines a relationship between two (or more) variables differently from an explicit function. As opposed to an explicit function that can be written in the form of , an implicit function is defined as an equation of multiple variables. It is often the case that this equation cannot be solved for one variable explicitly in terms of the other. In Maple, it is easiest to assign a name to the entire equation, including the sign.  The elliptic curve is a simple example. It cannot be written as a single function of the form , since for a given value of , there may be two different -values.   E := y^2 = x^3 - 2*x + 1;      To find points on the curve, we can substitute a value for and solve for .   subs(x=2, E); solve(%,x);    subs  solving equations solve  ditto operator     Although many implicit functions cannot be expressed as a single function , it may be possible to split up implicit functions into explicit functions by solving for .   L := x^2 + (y - surd(x^2,3))^2 = 1;    Here, the command surd(x^2,3) is equivalent to . You may also use root[3](x^2) , although the results may vary. Maple is built to work with complex numbers, which lead to some unusual behaviours with roots and exponents.    mathematical functions th root     solve(L, y);      "
},
{
  "id": "sec_plotting_implicit_functions",
  "level": "1",
  "url": "sec_plotting_implicit_functions.html",
  "type": "Section",
  "number": "13.2",
  "title": "Plotting Implicit Functions",
  "body": " Plotting Implicit Functions  The implicitplot() command can be used to plot implicit functions and requires that the plots package is loaded first. Packages are loaded using the with() command and it is typically a good idea to load any necessary packages at the top of your worksheet. Loading a package only needs to be done once per Maple worksheet, but needs to be run each time you open a new or previously closed document. packages with  packages plots   Unlike the normal plot() command, each curve that is being plotted must be in the form of an equation of two variables, including the sign. Additionally, you must specify an interval for both variables.  Below are the graphs of the two implicit curves defined in .   with(plots):    E := y^2 = x^3 - 2*x + 1;       implicitplot(E, x=-5..5, y=-5..5);    Most of the implicit functions used in this lab manual will produce smooth curves when plotted. However, if your plot appears to have jagged edges as shown in , then you may wish to set the optional parameter numpoints=30000 . This increases the number of points plotted to make a smoother graph. The higher that numpoints is set to, the smoother the graph may be. Be careful not to set too high of a number to avoid Maple freezing. implicit functions implicitplot!plot resolution    An example of an implicitplot() output where numpoints is set too low.     L := x^2 + (y - surd(x^2,3))^2 = 1;    mathematical functions th root     implicitplot(L, x=-1.2..1.2, y=-1.2..1.8, coloring = [\"red\",\"blue\"], filledregions=true);    implicit functions implicitplot!filledregions    "
},
{
  "id": "fig_implicitplot_numpoints",
  "level": "2",
  "url": "sec_plotting_implicit_functions.html#fig_implicitplot_numpoints",
  "type": "Figure",
  "number": "13.1",
  "title": "",
  "body": " An example of an implicitplot() output where numpoints is set too low.   "
},
{
  "id": "sec_implicit_differentiation",
  "level": "1",
  "url": "sec_implicit_differentiation.html",
  "type": "Section",
  "number": "13.3",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation  implicit functions implicitdiff  We need to use the implicitdiff() command to find the derivative of an implicit function. It is easiest to first assign a name to the equation.   E := y^2 = x^3 - 2*x + 1;    assignment operator implicit function     dydx := implicitdiff(E, y, x);       The order in which you list the variables matters; the first variable is treated as the dependent variable and the second variable is treated as the independent variable. To find , you must use implicitdiff(E,y,x) and to find , you must use implicitdiff(E,x,y) .   dxdy := implicitdiff(E, y, x);      When trying to find the slope of a tangent line at a point on an implicit curve, it helps to plot the curve first. There may be several different -values for a single -value on the curve.   L := x^2 + (y - root[3](x^2))^2 = 1;    mathematical functions th root     with(plots):  implicitplot(L, x=-1.2..1.2, y=-1.2..1.8);    packages with  packages plots  implicit functions implicitplot    To find the points on the curve at a specific value, you must first substitute the value into the equation and then solve for the -coordinates. Here, we can find the -coordinates on the curve when .   subs(x=0.5, L); yCoords := fsolve(%);    subs  solving equations fsolve     Notice that two -coordinates are assigned to here. This means that is now a list . Lists can contain many objects and have a definite order. To use the first value in this list, you would need to type yCoords[1] and to use the second value in this list, you would need to type yCoords[2] . If you prefer, you may assign the individual values to unique names.  To find the slopes of the two tangent lines to the curve at , we start by computing the derivative with implicitdiff() .   dydx := implicitdiff(L, y, x);      Now we can substitute and the value for each of the two points to determine the slopes.   subs(x=0.5, y=yCoords[1], dydx);       subs(x=0.5, y=yCoords[2], dydx);      "
},
{
  "id": "sec_applications_of_implicit_differentiation",
  "level": "1",
  "url": "sec_applications_of_implicit_differentiation.html",
  "type": "Section",
  "number": "13.4",
  "title": "Applications of Implicit Differentiation",
  "body": " Applications of Implicit Differentiation  In these examples, we will make use of the implicitdiff() and implicitplot() commands.   Finding the Equation of a Tangent Line  lines tangent line!implicit function  In this example, we will find the equations of the tangent lines to the circle of radius , centred at the point , where . Once these equations are assigned, we will plot the circle and the two tangent together in one single implicitplot() command.   The general equation of a circle that is centred at the point and has radius is .    circle := (x-1)\\symbol{94}2 + (y-1)\\symbol{94}2 = 16;      We need to find the -coordinates by substituting and solving for .   subs(x=3, circle); yCoords:=solve(%);    subs     The derivative can be found using implicitdiff() . Then, by substituting the two points, we can find the slopes of both tangent lines.   dydx := implicitdiff(circle, y, x);    implicit functions implicitdiff     Make sure that you choose different names for each slope when assigning them. We will need each of these values later in order to assign the equations of the tangent lines.    m1 := subs(x=3, y=yCoords[1], dydx);    subs     m2 := subs(x=3, y=yCoords[2], dydx);      Recall that the equation of a line passing through with slope can be written in the form . If we wish to plot the circle and the two tangent lines together using a single implicitplot() command, they will need to be defined as equations involving an equals sign. Each of these equations can then be expanded out to see the lines in their typical form.   Both line1 and line2 are defined with the inclusion of , making them equations that implicitplot() can plot.    line1 := y = m1*(x-3) + yCoords[1]; expand(%);        line2 := y = m2*(x-3) + yCoords[2]; expand(%);       We can now plot the circle and the two lines together. Using the scaling=constrained parameter will produce a proper circle and avoid it being stretched either vertically or horizontally. packages plots  implicit functions implicitplot!scaling  implicit functions implicitplot!multiple curves  implicit functions implicitplot!changing axes  implicit functions implicitplot!plot resolution  implicit functions implicitplot!colour    The graph can also be scaled without using the scaling=constrained parameter; simply click on the graph and then click on the 1:1 button in the plot toolbar at the top of the page.     with(plots):  implicitplot( [circle, line1, line2], x=-8..8, y=-8..8, colour=[red,blue,green], scaling=constrained);      Orthogonal Curves  In this example, we will show that the implicit curves and are always orthogonal (perpendicular) at their intersection points. We'll start by assigning names to these two equations so that we can plot the two curves using implicitplot() .   curve1 := x\\symbol{94}2 - y\\symbol{94}2 = 8;       We must include multiplication between and here, otherwise Maple will think we want to use a variable called .    curve2 := -x*y = 3;       with(plots):  implicitplot([curve1, curve2], x=-5..5, y=-5..5, colour=[red, blue], scaling=constrained);    Using the scaling=constrained parameter is very important in this application. This will avoid having Maple stretch the graph horizontally or vertically, which will preserve the angles of intersection that we are looking for.    From the graphs of these two curves, it appears that their intersections are perpendicular. This can be proven by showing that the derivative of one curve is equal to the negative reciprocal of the other, or that they multiply to equal .  The intersection points are any points that satisfy both of the equations of these two implicit curves. They can be found using a single solve() (or fsolve() ) command, so long as it is given both equations and the two variables, and . solving equations intersection points    Using the option explicit=true here will avoid the use of RootOf in the output. Optionally, using fsolve() may be preferable.    solve( {curve1, curve2}, {x, y}, explicit = true);      Points involving are imaginary points and should not be considered. Therefore, the only two intersection points are and , which agrees with what we see from the graph.  The derivatives of both curves can be found implicitly using the implicitdiff() command. They can be assigned two different names for easy comparison later. implicit functions implicitdiff    dydx1 := implicitdiff(curve1, y, x);       dydx2 := implicitdiff(curve2, y, x);      To show that the slopes are negative reciprocals at a particular intersection point, the - and -values can be substituted into the two derivatives. subs    subs(x=-3, y=1, dydx1); subs(x=-3, y=1, dydx2);       Alternatively, it can be shown that the derivatives are negative reciprocals of each other for any point where both slopes are defined.   Recall that two slopes and are perpendicular if .    dydx1*dydx2;       "
},
{
  "id": "ex_implicittanline",
  "level": "2",
  "url": "sec_applications_of_implicit_differentiation.html#ex_implicittanline",
  "type": "Example",
  "number": "13.2",
  "title": "Finding the Equation of a Tangent Line.",
  "body": " Finding the Equation of a Tangent Line  lines tangent line!implicit function  In this example, we will find the equations of the tangent lines to the circle of radius , centred at the point , where . Once these equations are assigned, we will plot the circle and the two tangent together in one single implicitplot() command.   The general equation of a circle that is centred at the point and has radius is .    circle := (x-1)\\symbol{94}2 + (y-1)\\symbol{94}2 = 16;      We need to find the -coordinates by substituting and solving for .   subs(x=3, circle); yCoords:=solve(%);    subs     The derivative can be found using implicitdiff() . Then, by substituting the two points, we can find the slopes of both tangent lines.   dydx := implicitdiff(circle, y, x);    implicit functions implicitdiff     Make sure that you choose different names for each slope when assigning them. We will need each of these values later in order to assign the equations of the tangent lines.    m1 := subs(x=3, y=yCoords[1], dydx);    subs     m2 := subs(x=3, y=yCoords[2], dydx);      Recall that the equation of a line passing through with slope can be written in the form . If we wish to plot the circle and the two tangent lines together using a single implicitplot() command, they will need to be defined as equations involving an equals sign. Each of these equations can then be expanded out to see the lines in their typical form.   Both line1 and line2 are defined with the inclusion of , making them equations that implicitplot() can plot.    line1 := y = m1*(x-3) + yCoords[1]; expand(%);        line2 := y = m2*(x-3) + yCoords[2]; expand(%);       We can now plot the circle and the two lines together. Using the scaling=constrained parameter will produce a proper circle and avoid it being stretched either vertically or horizontally. packages plots  implicit functions implicitplot!scaling  implicit functions implicitplot!multiple curves  implicit functions implicitplot!changing axes  implicit functions implicitplot!plot resolution  implicit functions implicitplot!colour    The graph can also be scaled without using the scaling=constrained parameter; simply click on the graph and then click on the 1:1 button in the plot toolbar at the top of the page.     with(plots):  implicitplot( [circle, line1, line2], x=-8..8, y=-8..8, colour=[red,blue,green], scaling=constrained);    "
},
{
  "id": "ex_orthocurves",
  "level": "2",
  "url": "sec_applications_of_implicit_differentiation.html#ex_orthocurves",
  "type": "Example",
  "number": "13.3",
  "title": "Orthogonal Curves.",
  "body": " Orthogonal Curves  In this example, we will show that the implicit curves and are always orthogonal (perpendicular) at their intersection points. We'll start by assigning names to these two equations so that we can plot the two curves using implicitplot() .   curve1 := x\\symbol{94}2 - y\\symbol{94}2 = 8;       We must include multiplication between and here, otherwise Maple will think we want to use a variable called .    curve2 := -x*y = 3;       with(plots):  implicitplot([curve1, curve2], x=-5..5, y=-5..5, colour=[red, blue], scaling=constrained);    Using the scaling=constrained parameter is very important in this application. This will avoid having Maple stretch the graph horizontally or vertically, which will preserve the angles of intersection that we are looking for.    From the graphs of these two curves, it appears that their intersections are perpendicular. This can be proven by showing that the derivative of one curve is equal to the negative reciprocal of the other, or that they multiply to equal .  The intersection points are any points that satisfy both of the equations of these two implicit curves. They can be found using a single solve() (or fsolve() ) command, so long as it is given both equations and the two variables, and . solving equations intersection points    Using the option explicit=true here will avoid the use of RootOf in the output. Optionally, using fsolve() may be preferable.    solve( {curve1, curve2}, {x, y}, explicit = true);      Points involving are imaginary points and should not be considered. Therefore, the only two intersection points are and , which agrees with what we see from the graph.  The derivatives of both curves can be found implicitly using the implicitdiff() command. They can be assigned two different names for easy comparison later. implicit functions implicitdiff    dydx1 := implicitdiff(curve1, y, x);       dydx2 := implicitdiff(curve2, y, x);      To show that the slopes are negative reciprocals at a particular intersection point, the - and -values can be substituted into the two derivatives. subs    subs(x=-3, y=1, dydx1); subs(x=-3, y=1, dydx2);       Alternatively, it can be shown that the derivatives are negative reciprocals of each other for any point where both slopes are defined.   Recall that two slopes and are perpendicular if .    dydx1*dydx2;      "
},
{
  "id": "sec_approximating_area_using_approximateint",
  "level": "1",
  "url": "sec_approximating_area_using_approximateint.html",
  "type": "Section",
  "number": "14.1",
  "title": "Approximating the Area Under a Function Using ApproximateInt",
  "body": " Approximating the Area Under a Function Using ApproximateInt  integral approximation ApproximateInt  integral approximation ApproximateInt!method  integral approximation ApproximateInt!output options  integral approximation ApproximateInt!partition  To use the ApproximateInt() command, we must load the Student[Calculus1] package. Packages are loaded using the with() command and it is typically a good idea to load any necessary packages at the top of your worksheet. Loading a package only needs to be done once per Maple worksheet, but needs to be run each time you open a new or previously closed document. packages Student[Calculus1]   The function and interval must be specified. Other optional parameters may be included to change how the result is displayed and how the approximation is computed.   A list of optional parameters for the ApproximateInt() command      Parameter  Description    method = method  Select the method for approximation ( left , right , lower , upper , midpoint , trapezoid , simpson ).    output = output  Change how the output is displayed ( plot , value , sum ).    partition = n  Change the number of subintervals to use for approximation.         Most of these methods of approximation are discussed in class: left-hand, right-hand, midpoint, trapezoid, and Simpson's rules.  When using method=upper or method=lower , Maple approximates area using rectangles based off of the maximum or minimum value of the function in each subinterval, respectively. This can be useful to give upper and lower bounds on the true area bounded by the function and the horizontal axis.   Approximating Area using Left-hand and Right-hand Rules  In this example, we will approximate the signed area between and the -axis using left-hand and right-hand rectanges. First, we will see how Maple can give the approximate area using a specific number of subintervals (which Maple calls a partition ). These are two common methods that we learn when first calculating Riemann sums.  To start, we will assign function, . and calculate some approximations. mathematical functions exponential    f(x) := 10*exp(-x);      We will start with using eight subintervals and approximate the area using left-hand and right-hand rectangles. The method needs to be specified as well as the number of partitions. Maple will give the exact value of this Riemann sum, which can be converted to decimal using the evalf() command. evalf  ditto operator  integral approximation Riemann sum    with(Student[Calculus1]):  ApproximateInt(f(x), x = 0..4, method=left, output=value, partition=8); evalf(%);        ApproximateInt(f(x), x = 0..4, method=right, output=value, partition=8); evalf(%);       If we wish to get the actual area under the curve, then we can use an arbitrary rectangles and take the limit as . limit at infinity    In many cases, calculating the limit of this sum as is very numerically challenging and Maple may not output a numerical value. Using the value(%) command immediately after the limit() may help to convert the limit to a numerical result.    ApproximateInt(f(x), x = 0..4, method=left, output=sum, partition=n); limit(%, n = infinity); evalf(%);          Approximating the Area under  In this example, we will approximate the signed area between and the -axis using rectangle approximation. Unlike in the previous example, we will be using altenative methods for determining the height of the rectangle in each subinterval (or partition ), such as upper , lower , and midpoint .  We will start by assigning the function.   f(x) := x*sin(x);    mathematical functions sine    The method=upper option always uses the maximum value of in each subinterval for the height of each rectangle. Below is a plot of the rectangles as well as the approximation of area given by the method when using ten subintervals. As you can see, this method gives a very deliberate overestimate of the actual area bouded by this function and the -axis.   with(Student[Calculus1]):  ApproximateInt(f(x), x=-3..3, method=upper, output=plot, partition=10);     ApproximateInt(f(x), x=-3..3, method=upper, output=value, partition=10);      The method=lower option always uses the minimum value of in each subinterval for the height of each rectangle.   ApproximateInt(f(x), x=-3..3, method=lower, output=value, partition=10);      Finally, the midpoint rule uses the height of each rectangle as the value of the function at the midpoint in each subinterval. Below is a plot of twenty rectangles using the midpoint rule.   ApproximateInt(f(x), x=-3..3, method=midpoint, output=plot, partition=20);     "
},
{
  "id": "tbl_approximateint_options",
  "level": "2",
  "url": "sec_approximating_area_using_approximateint.html#tbl_approximateint_options",
  "type": "Table",
  "number": "14.1",
  "title": "A list of optional parameters for the <code class=\"code-inline tex2jax_ignore\">ApproximateInt()<\/code> command",
  "body": " A list of optional parameters for the ApproximateInt() command      Parameter  Description    method = method  Select the method for approximation ( left , right , lower , upper , midpoint , trapezoid , simpson ).    output = output  Change how the output is displayed ( plot , value , sum ).    partition = n  Change the number of subintervals to use for approximation.        "
},
{
  "id": "sec_approximating_area_using_approximateint-11",
  "level": "2",
  "url": "sec_approximating_area_using_approximateint.html#sec_approximating_area_using_approximateint-11",
  "type": "Example",
  "number": "14.2",
  "title": "Approximating Area using Left-hand and Right-hand Rules.",
  "body": " Approximating Area using Left-hand and Right-hand Rules  In this example, we will approximate the signed area between and the -axis using left-hand and right-hand rectanges. First, we will see how Maple can give the approximate area using a specific number of subintervals (which Maple calls a partition ). These are two common methods that we learn when first calculating Riemann sums.  To start, we will assign function, . and calculate some approximations. mathematical functions exponential    f(x) := 10*exp(-x);      We will start with using eight subintervals and approximate the area using left-hand and right-hand rectangles. The method needs to be specified as well as the number of partitions. Maple will give the exact value of this Riemann sum, which can be converted to decimal using the evalf() command. evalf  ditto operator  integral approximation Riemann sum    with(Student[Calculus1]):  ApproximateInt(f(x), x = 0..4, method=left, output=value, partition=8); evalf(%);        ApproximateInt(f(x), x = 0..4, method=right, output=value, partition=8); evalf(%);       If we wish to get the actual area under the curve, then we can use an arbitrary rectangles and take the limit as . limit at infinity    In many cases, calculating the limit of this sum as is very numerically challenging and Maple may not output a numerical value. Using the value(%) command immediately after the limit() may help to convert the limit to a numerical result.    ApproximateInt(f(x), x = 0..4, method=left, output=sum, partition=n); limit(%, n = infinity); evalf(%);        "
},
{
  "id": "sec_approximating_area_using_approximateint-12",
  "level": "2",
  "url": "sec_approximating_area_using_approximateint.html#sec_approximating_area_using_approximateint-12",
  "type": "Example",
  "number": "14.3",
  "title": "Approximating the Area under.",
  "body": " Approximating the Area under  In this example, we will approximate the signed area between and the -axis using rectangle approximation. Unlike in the previous example, we will be using altenative methods for determining the height of the rectangle in each subinterval (or partition ), such as upper , lower , and midpoint .  We will start by assigning the function.   f(x) := x*sin(x);    mathematical functions sine    The method=upper option always uses the maximum value of in each subinterval for the height of each rectangle. Below is a plot of the rectangles as well as the approximation of area given by the method when using ten subintervals. As you can see, this method gives a very deliberate overestimate of the actual area bouded by this function and the -axis.   with(Student[Calculus1]):  ApproximateInt(f(x), x=-3..3, method=upper, output=plot, partition=10);     ApproximateInt(f(x), x=-3..3, method=upper, output=value, partition=10);      The method=lower option always uses the minimum value of in each subinterval for the height of each rectangle.   ApproximateInt(f(x), x=-3..3, method=lower, output=value, partition=10);      Finally, the midpoint rule uses the height of each rectangle as the value of the function at the midpoint in each subinterval. Below is a plot of twenty rectangles using the midpoint rule.   ApproximateInt(f(x), x=-3..3, method=midpoint, output=plot, partition=20);    "
},
{
  "id": "sec_approximating_a_definite_integral",
  "level": "1",
  "url": "sec_approximating_a_definite_integral.html",
  "type": "Section",
  "number": "14.2",
  "title": "Approximating the Value of a Definite Integral",
  "body": " Approximating the Value of a Definite Integral  The ApproximateInt() command is commonly used to approximate the value of a definite integral, particularly when the exact value is computationally difficult, even by computer. To use the command for this purpose, it can be useful to assign a name to an definite integral calculation, using the Int() command. This capitalized version of the command is used to symbolically create an integral without trying to compute it. integral Int   Use of the Int() command is fully explained in .   int1 := Int(x^2, x=0..2);      We can evaluate this integral with subintervals (each called a partition ) using three different methods. We will start with the midpoint rule. integral approximation ApproximateInt!method    ApproximateInt(int1, method=midpoint, output=value, partition=4);      The method=trapezoid option uses trapezoids instead of rectangles to approximate the area. This is an average of the left-hand and right-hand rules for rectangle approximation.   ApproximateInt(int1, method=trapezoid, output=value, partition=4);      Simpson's rule is quite a bit more involved. This method uses the right-hand point, left-hand point, and midpoint in each subinterval ( partition ). It then fits a parabola through these three points and determines the area between each parabolic arc and the -axis. As a result, it tends to be the most accurate.  Because of the extra sample point in each partition, the approximation uses twice as many sample points as there are subintervals. For this reason, when we set partition=4 , we would typically use for the formulas used in class.   ApproximateInt(int1, method=simpson, output=value, partition=4);      To visualize the approximation using any of the above methods, we use the option output=plot .   ApproximateInt(int1, method=trapezoid, output=plot, partition=2);    Maple can also give the summation form for any of the above approximations.   ApproximateInt(int1, method=trapezoid, output=sum, partition=4);      "
},
{
  "id": "sec_definite_integrals",
  "level": "1",
  "url": "sec_definite_integrals.html",
  "type": "Section",
  "number": "15.1",
  "title": "Definite Integrals",
  "body": " Definite Integrals  integral int!definite  integral Int!definite  The int() and Int() commands allows us to compute definite and indefinite directly. It is important to know the difference between these two commands:    int()   This command outputs the the result of the definite or indefinite integral (whenever possible).  The palettes toolbar includes definite and indefinite shortcuts that are equivalent to this command.       Int()   This is the inert form of the command, which outputs only the definite or indefinite integral itself, without computing the result.  This version of the command makes it possible to assign a name to the integral and use it in other commands.  The value() command may be applied to the output of an Int() command to compute the result of integration.     Always remember that capitalization is important in Maple.  To see the difference between the two version, we can evaluate the definite integral of over the interval . plot axes intervals    f(x) := 1\/(1+x^2);       plot(f(x), x=-3..3);    We use the Int() command to display the integral, and the int() command to evaluate the integral. The evalf() command may be used to evaluate the result as a decimal.   Int(f(x), x=-3..3);       int(f(x), x=-3..3); evalf(%)        The Net Area under on  mathematical functions logarithmic@natural logarithmic  integral int!definite  In this example, we will use a definite integral to determine the net area bounded by and the -axis over the interval . We'll start by assigning the function and looking at a graph of the function to get a better sense of the area. plot axes intervals    g(x) := ln(x);       plot(g(x), x=1..10);    We'll use the inert command Int() to see how the integral is set up. This can then be combined with value(%) and evalf(%) to have the result computed exactly and as a rounded decimal. evalf  ditto operator    Int(g(x), x=1..10); value(%); evalf(%);          An Improper Integral  integral int!improper  integral Int!improper  The int() and Int() commands can also be used to compute improper definite integrals. In this example, we will determine whether the integral is convergent and if so, its exact value.  To begin, we will assign the function and take a look at its graph. The plot() command may be able to plot a function over an infinite interval. This can produce unpredictable results, so sometimes it is better to simply choose a closed interval with large values of instead.   h(x) := 1\/x^2;       plot(h(x), x=0..infinity);    We'll start with the inert command, to see how the improper integral is set up. For in Maple, we type infinity .   Int(h(x), x=1..infinity);      Next we'll calculate the result using the lowercase int() command to see if the result is finite.   int(h(x), x=1..infinity);      Since the result is finite, this improper integral is convergent.   "
},
{
  "id": "sec_definite_integrals-15",
  "level": "2",
  "url": "sec_definite_integrals.html#sec_definite_integrals-15",
  "type": "Example",
  "number": "15.1",
  "title": "The Net Area under <span class=\"process-math\">\\(g(x) = \\ln(x)\\)<\/span> on <span class=\"process-math\">\\([1,10]\\)<\/span>.",
  "body": " The Net Area under on  mathematical functions logarithmic@natural logarithmic  integral int!definite  In this example, we will use a definite integral to determine the net area bounded by and the -axis over the interval . We'll start by assigning the function and looking at a graph of the function to get a better sense of the area. plot axes intervals    g(x) := ln(x);       plot(g(x), x=1..10);    We'll use the inert command Int() to see how the integral is set up. This can then be combined with value(%) and evalf(%) to have the result computed exactly and as a rounded decimal. evalf  ditto operator    Int(g(x), x=1..10); value(%); evalf(%);        "
},
{
  "id": "sec_definite_integrals-16",
  "level": "2",
  "url": "sec_definite_integrals.html#sec_definite_integrals-16",
  "type": "Example",
  "number": "15.2",
  "title": "An Improper Integral.",
  "body": " An Improper Integral  integral int!improper  integral Int!improper  The int() and Int() commands can also be used to compute improper definite integrals. In this example, we will determine whether the integral is convergent and if so, its exact value.  To begin, we will assign the function and take a look at its graph. The plot() command may be able to plot a function over an infinite interval. This can produce unpredictable results, so sometimes it is better to simply choose a closed interval with large values of instead.   h(x) := 1\/x^2;       plot(h(x), x=0..infinity);    We'll start with the inert command, to see how the improper integral is set up. For in Maple, we type infinity .   Int(h(x), x=1..infinity);      Next we'll calculate the result using the lowercase int() command to see if the result is finite.   int(h(x), x=1..infinity);      Since the result is finite, this improper integral is convergent.  "
},
{
  "id": "sec_indefinite_integrals_and_antiderivatives",
  "level": "1",
  "url": "sec_indefinite_integrals_and_antiderivatives.html",
  "type": "Section",
  "number": "15.2",
  "title": "Indefinite Integrals and Antiderivatives",
  "body": " Indefinite Integrals and Antiderivatives  integral int!indefinite  integral Int!indefinite  The Int() and int() commands may also be used for indefinite integrals. As mentioned in , the inert command Int() displays the integral, and int() evaluates the integral directly. Either command may be used for finding an antiderivative of a given function.   Int(sin(x), x);       int(sin(x), x);      Notice that Maple does not include the addition of the constant of integration when evaluating indefinite integrals.  The inert Int() command can be combined with the value() command to display the integral symbolically and then compute the indefinite integral.   p(x) := 1\/sqrt(1 + x^2);    mathematical functions square root     Int(p(x), x); value(%);       The function arcsinh is called the inverse hyperbolic sine function. Functions like and are called hyperbolic functions. These functions are analogs of the ordinary trigonometric, or circular, functions; just as the points form a circle with a unit radius, the points form the right half of the equilateral hyperbola. mathematical functions inverse hyperbolic sine  mathematical functions hyperbolic functions!sinh  mathematical functions hyperbolic functions!cosh       "
},
{
  "id": "sec_integration_methods_tutor",
  "level": "1",
  "url": "sec_integration_methods_tutor.html",
  "type": "Section",
  "number": "15.3",
  "title": "The Integration Methods Tutor",
  "body": " The Integration Methods Tutor  integral integration methods tutor  The Integration Methods tutor can be used to evaluate an integral step-by-step, using integration techniques discussed in class. You can either manually attempt different techniques on the integral, or let Maple decide which techniques to use. In some cases, Maple may find particularly clever substitutions and techniques that may not be immediately apparent when integration without software.   Opening up the Integration Methods tutor using menus.     Opening up the Integration Methods tutor using commands. The Student[Calculus1] package is required.     Applying Integration by Parts to an Indefinite Integral  In this example, we will use the integration methods tutor to apply the method of integration by parts to the indefinite integral . After opening the tutor, we begin by typing out the function and the variable name. For an indefinite integral, we leave the interval blank and click Start. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  If the Get Hint button is clicked, Maple will suggest an integration technique. In this case it gives a hint that there is multiplication in the integrand, so this is a good indication that we can apply the integration by parts formula: , where and are differentiable functions.   With this hint, we can click on the Parts button, where we will need to type in the functions for and . It is important to note that we do not type in the function for the differential . With these two functions input, we can click on Apply to see the result.      Next, we can use the constant multiple rule to simplify the resulting integral.   Finally, integration by parts can be applied a second time, followed by the exponential rule to finish evaluating the integral.        Evaluating a Definite Integral Using Substitution  In this example, we will use the integration methods tutor to evaluate the definite integral step-by-step, using the substitution method and other techniques of integration.  After opening the tutor, we begin by typing out the function, the variable name, and the interval. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  After clicking Start, we can see the integral and click on Next Step to see the integral evaluated one step at a time. Alternatively, we may click All Steps to see the entire process completed at once.    "
},
{
  "id": "sec_integration_methods_tutor-4",
  "level": "2",
  "url": "sec_integration_methods_tutor.html#sec_integration_methods_tutor-4",
  "type": "Figure",
  "number": "15.3",
  "title": "",
  "body": " Opening up the Integration Methods tutor using menus.   "
},
{
  "id": "sec_integration_methods_tutor-5",
  "level": "2",
  "url": "sec_integration_methods_tutor.html#sec_integration_methods_tutor-5",
  "type": "Figure",
  "number": "15.4",
  "title": "",
  "body": " Opening up the Integration Methods tutor using commands. The Student[Calculus1] package is required.   "
},
{
  "id": "sec_integration_methods_tutor-6",
  "level": "2",
  "url": "sec_integration_methods_tutor.html#sec_integration_methods_tutor-6",
  "type": "Example",
  "number": "15.5",
  "title": "Applying Integration by Parts to an Indefinite Integral.",
  "body": " Applying Integration by Parts to an Indefinite Integral  In this example, we will use the integration methods tutor to apply the method of integration by parts to the indefinite integral . After opening the tutor, we begin by typing out the function and the variable name. For an indefinite integral, we leave the interval blank and click Start. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  If the Get Hint button is clicked, Maple will suggest an integration technique. In this case it gives a hint that there is multiplication in the integrand, so this is a good indication that we can apply the integration by parts formula: , where and are differentiable functions.   With this hint, we can click on the Parts button, where we will need to type in the functions for and . It is important to note that we do not type in the function for the differential . With these two functions input, we can click on Apply to see the result.      Next, we can use the constant multiple rule to simplify the resulting integral.   Finally, integration by parts can be applied a second time, followed by the exponential rule to finish evaluating the integral.      "
},
{
  "id": "sec_integration_methods_tutor-7",
  "level": "2",
  "url": "sec_integration_methods_tutor.html#sec_integration_methods_tutor-7",
  "type": "Example",
  "number": "15.6",
  "title": "Evaluating a Definite Integral Using Substitution.",
  "body": " Evaluating a Definite Integral Using Substitution  In this example, we will use the integration methods tutor to evaluate the definite integral step-by-step, using the substitution method and other techniques of integration.  After opening the tutor, we begin by typing out the function, the variable name, and the interval. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots. You must also include the symbol * for multiplication.  After clicking Start, we can see the integral and click on Next Step to see the integral evaluated one step at a time. Alternatively, we may click All Steps to see the entire process completed at once.   "
},
{
  "id": "sec_volume_of_revolution_tutor",
  "level": "1",
  "url": "sec_volume_of_revolution_tutor.html",
  "type": "Section",
  "number": "15.4",
  "title": "Volumes of Revolution",
  "body": " Volumes of Revolution  volume of revolution tutor  The Volume of Revolution tutor is used to evaluate the volume of a solid obtained by revolving a region about a specified horizontal or vertical axis.   Opening up the Volume of Revolution tutor using menus.     Opening up the Volume of Revolution tutor using commands. The Student[Calculus1] package is required.  packages Student[Calculus1]     Volume Obtained by Rotating a Region about a Horizontal Axis  In this example, we will determine the volume of the solid obtained by revolving the region bounded by and about .  It is a good idea to begin by plotting the two-dimensional region to help find the intersection points of the two curves. plot multiple functions  plot axes intervals    plot( [-x^2+4, x^2-4], x=-2..2);    As we can see from the graph, the intersection points occur at and . This is easy to confirm by solving the system of two equations for and . This can be done with a single solve() or fsolve() command, as explained in .  Now we can load up the Volume of Revolution Tutor and enter the functions. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots and include the symbol * for multiplication. Be sure to set the correct variable and interval for the variable along with the information about the axis of revolution.  In this case, the Line of Revolution should be set to Horizontal, with a distance from the -axis as . Click Display when you have everything set up correctly.   It's a good idea to copy the code in the Maple Command box at the bottom of the tutor so that it can be pasted into a new Maple input in your worksheet. This code uses the VolumeOfRevolution() command, which has many options that may be changed to give various types of output. You can use this command to simply output the 3D graph of the solid:   with(Student[Calculus1]):  VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=plot);    Changing the output option will can give you the exact value of the volume or the integral used to obtain the volume.   VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=integral);       VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=value);      From this code, you can also easily change other options, such as the axis (horizontal or vertical) and distancefromaxis .    Volume Obtained by Rotating a Region about a Horizontal Axis  In this example, we will determine the volume of the solid obtained by revolving the region bounded by and about . Since this is the same region as described in , most of the steps are the same. However, in this case we must set the Line of Revolution information to be a vertical axis with an offset of from the -axis.    "
},
{
  "id": "sec_volume_of_revolution_tutor-4",
  "level": "2",
  "url": "sec_volume_of_revolution_tutor.html#sec_volume_of_revolution_tutor-4",
  "type": "Figure",
  "number": "15.7",
  "title": "",
  "body": " Opening up the Volume of Revolution tutor using menus.   "
},
{
  "id": "sec_volume_of_revolution_tutor-5",
  "level": "2",
  "url": "sec_volume_of_revolution_tutor.html#sec_volume_of_revolution_tutor-5",
  "type": "Figure",
  "number": "15.8",
  "title": "",
  "body": " Opening up the Volume of Revolution tutor using commands. The Student[Calculus1] package is required.  packages Student[Calculus1]   "
},
{
  "id": "ex_revolution_horizontal",
  "level": "2",
  "url": "sec_volume_of_revolution_tutor.html#ex_revolution_horizontal",
  "type": "Example",
  "number": "15.9",
  "title": "Volume Obtained by Rotating a Region about a Horizontal Axis.",
  "body": " Volume Obtained by Rotating a Region about a Horizontal Axis  In this example, we will determine the volume of the solid obtained by revolving the region bounded by and about .  It is a good idea to begin by plotting the two-dimensional region to help find the intersection points of the two curves. plot multiple functions  plot axes intervals    plot( [-x^2+4, x^2-4], x=-2..2);    As we can see from the graph, the intersection points occur at and . This is easy to confirm by solving the system of two equations for and . This can be done with a single solve() or fsolve() command, as explained in .  Now we can load up the Volume of Revolution Tutor and enter the functions. When typing out the function in the tutor, you will not have access to the palettes toolbar in Maple, so you will need to type out commands such as sqrt() for square roots and include the symbol * for multiplication. Be sure to set the correct variable and interval for the variable along with the information about the axis of revolution.  In this case, the Line of Revolution should be set to Horizontal, with a distance from the -axis as . Click Display when you have everything set up correctly.   It's a good idea to copy the code in the Maple Command box at the bottom of the tutor so that it can be pasted into a new Maple input in your worksheet. This code uses the VolumeOfRevolution() command, which has many options that may be changed to give various types of output. You can use this command to simply output the 3D graph of the solid:   with(Student[Calculus1]):  VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=plot);    Changing the output option will can give you the exact value of the volume or the integral used to obtain the volume.   VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=integral);       VolumeOfRevolution(-x^2+4, x^2+4, -2..2, 'axis'=horizontal, 'distancefromaxis' = 0, 'showvolume'=true, 'showsum'=false, 'showregion'=false, 'method'=midpoint, 'partition'= 6, 'output'=value);      From this code, you can also easily change other options, such as the axis (horizontal or vertical) and distancefromaxis .  "
},
{
  "id": "ex_revolution_vertical",
  "level": "2",
  "url": "sec_volume_of_revolution_tutor.html#ex_revolution_vertical",
  "type": "Example",
  "number": "15.10",
  "title": "Volume Obtained by Rotating a Region about a Horizontal Axis.",
  "body": " Volume Obtained by Rotating a Region about a Horizontal Axis  In this example, we will determine the volume of the solid obtained by revolving the region bounded by and about . Since this is the same region as described in , most of the steps are the same. However, in this case we must set the Line of Revolution information to be a vertical axis with an offset of from the -axis.   "
},
{
  "id": "sec_arc_length",
  "level": "1",
  "url": "sec_arc_length.html",
  "type": "Section",
  "number": "15.5",
  "title": "Arc Length",
  "body": " Arc Length  arc length  We can use the ArcLength() command to find the arc length of a function over a specified interval. To use the this command, we must load the Student[Calculus1] package. Packages are loaded using the with() command and it is typically a good idea to load any necessary packages at the top of your worksheet. Loading a package only needs to be done once per Maple worksheet, but needs to be run each time you open a new or previously closed document. packages Student[Calculus1]   We can calculate the arclength for a simple function such as over an interval using a single ArcLength() command. It can be useful to assign the function first. evalf    f(x) := x^2;      The ArcLength() command will attempt to give the exact value of the arclength. evalf(%) may be used to display the result as a decimal.   with(Student[Calculus1]):  ArcLength(f(x), x=0..Pi); evalf(%)    Pi     In some cases, the exact value of arclength may not be able to be expressed algebraically, such as in the case of the arclength of over the interval . mathematical functions sine    g(x) := sin(x);       arclen := ArcLength(g(x), x=0..Pi);       is a transcendental function that you don't have to know too much about. However, this is a numerical value that can be written as a decimal.   evalf(arclen);      To have a better understanding of why the exact value may not be able to be given algebraically, it can be useful to see what integral is involved to compute the arclength. To do this, we can add the parameter output = integral to the ArcLength() command. arc length output=integral    ArcLength(g(x), x=0..Pi, output=integral);      "
},
{
  "id": "sec_finding_general_solution_to_de",
  "level": "1",
  "url": "sec_finding_general_solution_to_de.html",
  "type": "Section",
  "number": "16.1",
  "title": "Finding the General Solution to a Differential Equation",
  "body": " Finding the General Solution to a Differential Equation  For a simple example of a first-order differential equation, we will consider the equation , which may also be written as . We can see from the notation of the derivative that is a function of . Solutions to this differential equation are functions whose derivative satisfy this relationship. Finding these solutions require entirely different methods, so the usual solve() and fsolve() commands will not work to solve for .  Before solving a differential equation, it is often useful to assign a name to the equation in Maple. When doing this, we must ensure that we write in function notation so that the solver properly knows which variable is independent and which is dependent.   de1 := y'(x)= x^2*y(x);    assignment operator differential equations    Now, to solve the differential equation, we use the dsolve() command. This command does not require that any special packages are loaded. This command requires that the differential equation is properly using function notation and also requires the function for which to solve for. differential equations dsolve    dsolve(de1, y(x));      Due to the nature of indefinite integration, we can expect an arbitrary constant to appear in the solution. In this case, Maple uses as an arbitrary coefficient. By default, Maple names the constants . Since this value is arbitrary, this solution is known as a general solution to the differential equation. differential equations dsolve!general solution   We can clean this up a bit by substituting a nicer constant instead of , using the subs() command. subs    desoln := subs(_C1=A, _C1*exp((1\/3)*x^3));      Relabelling the arbitrary constant gives a much nicer appearance to the general solution for this differential equation. The constant from the above example is arbitrary, meaning that the function is always a solution for the original differential equation, no matter the value of .  "
},
{
  "id": "sec_finding_particular_solution_given_ic",
  "level": "1",
  "url": "sec_finding_particular_solution_given_ic.html",
  "type": "Section",
  "number": "16.2",
  "title": "Finding the Particular Solution given Initial Conditions",
  "body": " Finding the Particular Solution given Initial Conditions   differential equations dsolve!particular solution  differential equations dsolve!initial condition   In , we saw that solving a differential equation may result in one or more arbitrary constants in the solution. This general solution is essentially an entire family of functions that are collectively all solutions to the differential equation. However, if we are given additional information about the function in the form of an initial condition , we may be able to give a more specific function as a solution.  These initial conditions are typically written in the form for constants and . This means that when , we must have and the solution is a curve that passes through the point . The combination of a differential equation with one or more initial conditions is known as an initial value problem and the solution is known as a particular solution .  Continuing the example from , we saw that the differential equation has the general solution . Now suppose that we add the initial condition so that the function goes through the point . In this case, we have the initial value problem .  To include this initial condition when solving the differential equation in Maple, we add it into the dsolve() command. The initial value problem (differential equation and conditions) must be input within square brackets to create a list.   de1 := y'(x)= x^2*y(x);    assignment operator differential equations     dsolve( [de1, y(0) = 5], y(x));      The particular solution to with the initial condition is .  "
},
{
  "id": "sec_direction_fields",
  "level": "1",
  "url": "sec_direction_fields.html",
  "type": "Section",
  "number": "16.3",
  "title": "Direction Fields",
  "body": " Direction Fields  A direction field is a way to visualise the family of functions that make up the general solution to a first-order differential equation. At every point on the graph, a short arrow is draw that represents the slope of the tangent line to a solution curve passing through that point. This can be quite useful to get a visual interpretation of how solutions to a differential equation behave.  We use the DEplot() to plot the direction field for a differential equation and it requires that the DETools package is loaded first. Packages are loaded using the with() command and it is typically a good idea to load any necessary packages at the top of your worksheet. Loading a package only needs to be done once per Maple worksheet, but needs to be run each time you open a new or previously closed document. packages DETools   As an example, we will take a look at the direction field for the differential equation . It is best to assign a name to this equation so that we can use the DEplot() command multiple times conveniently. mathematical functions sine    de2 := y'(x) = x^2 * sin(y(x));      The required parameters for the DEplot() command are the differential equation, the function for which it is to be solved for, and the ranges of the two variables. differential equations DEplot  differential equations DEplot!axes intervals    with(DETools):  DEplot(de2, y(x), x=-2..2, y=-2..2);    The above direction field allows us to track a solution curve for any particular initial condition. To track this curve, we start at a point and follow the directions of the arrows. This will give us the one unique curve that satisfies the initial condition .  Maple will plot a particular solution if the initial condition is placed inside square brackets and included as an additional parameter in the DEplot() command. differential equations DEplot!solution curves  differential equations DEplot!linecolour   Suppose we wish to add the initial condition and view the particular solution on the direction field.   DEplot(de2, y(x), x=-2..2, y=-2..2, [y(0) = 1]);    Notice that this curve goes through the point and follows the direction of the arrows from the direction field.  Multiple particular solutions can be plotted at once. Here we plot the solutions that correspond to the initial conditions and :   The linecolour = colour parameter is used to adjust the colour of the solution curves, rather than the direction field.    DEplot(de2, y(x), x=-2..2, y=-2..2, [y(0) = 1, y(2) = -1], linecolour=[blue, cyan]);    "
},
{
  "id": "sec_sequences",
  "level": "1",
  "url": "sec_sequences.html",
  "type": "Section",
  "number": "17.1",
  "title": "Defining a Sequence",
  "body": " Defining a Sequence  The shortest way to list the terms in a sequence is using the $ symbol in Maple. As an example, we may wish to list the elements of the sequence . This should give four integers that follow the form of from index up to . sequences and series $ notation   A dollar symbol is used after the expression of a generic term of the sequence, followed by specifying an interval for the index.   3*k^2+2 $ k=0..3;      The index does not have to start at zero. Here are five integers of the sequence :   2*k^2-k $ k=1..5;      We can also list the terms in a sequence by using the seq() command. This command essentially performs the same operation as the $ symbol. Here is that same sequence again, using the seq() command. sequences and series seq    seq(2*k^2-k, k=1..5);      "
},
{
  "id": "sec_defining_and_evaluating_series",
  "level": "1",
  "url": "sec_defining_and_evaluating_series.html",
  "type": "Section",
  "number": "17.2",
  "title": "Defining and Evaluating Series",
  "body": " Defining and Evaluating Series  We use the capitalized Sum() command to display the summation notation for a series symbolically. This also makes it possible to assign a name to the sum and use it in other commands later. Much like with sequences, we need an expression for a generic term in the series using an index, such as . We then specify the range for the index that generates the terms in that sequence that are to be summed. sequences and series Sum   For a simple example, we can add the five values from the sequence in . This is a finite series, since only finitely many terms are summed.   s1 := Sum(2*k^2-k, k=1..5);      We may use the value() command on the result of a capitalized Sum() command to display the result. Alternatively, the lowercase sum() command directly evaluates the value of the sum, without displaying the series. value  sequences and series sum    value(s1);       sum(2*k^2-k, k=1..5);      To determine the value of an infinite sequence, we can use infinity as the a bound on the index. The value of an infinite sum may be a value (in the case of a convergent sum) or (in the case of a divergent sum). sequences and series infinite series    Sum((2\/3)^k, k=0..infinity); value(%);       This infinite series gives us a finite sum, so it is said to be convergent.   Sum(sin(k)+1, k=1..infinity); value(%)    mathematical functions sine     The infinite sum is said to be divergent.  "
},
{
  "id": "sec_taylor_and_maclaurin_series",
  "level": "1",
  "url": "sec_taylor_and_maclaurin_series.html",
  "type": "Section",
  "number": "17.3",
  "title": "Taylor and Maclaurin Series",
  "body": " Taylor and Maclaurin Series  sequences and series Taylor and Maclaurin series  One use of series is to find the Taylor series expansion of a function. Recall that the Taylor series of a function centred at , is the sum . A special case of a Taylor series that is centred at is known as a Maclaurin series.  In Maple, the taylor() command outputs the first few terms of the Taylor series. It uses big O notation as a placeholder to represent the remaining terms of higher degree. The number of terms displayed may be specified. In this example, we can see the Taylor series expansion of centred at , with terms up to (but not including) degree four.   taylor(sin(x), x = 5, 4);      The first terms of a Taylor series is known as an th degree Taylor polynomial approximation of . Depending on the convergence of the series, this polynomial approximation will have a very similar shape to the function in an interval centred at . The convert() command can be used to eliminate higher terms of the series and give a Taylor polynomial of a desired degree.   Maclaurin Series of  The function has a very simple pattern with its higher derivatives, particularly evaluated at , so it provides for a very simple example of a Maclaurin series. Since a Maclaurin series is a Taylor series centred at , we must specify in the taylor() command. mathematical functions exponential    taylor(exp(x), x = 0);      By default, Maple has given terms as an output here. The term in this expression means \"plus a bunch more terms with power and higher\". We can specify the order (related to number of terms) of the Taylor series by adding a number as the final argument to the command.   taylor(exp(x), x = 0, 10);      Using this additional option, Maple has displayed all the terms with powers less than .    Comparing a Function to its Taylor Polynomial  sequences and series Taylor and Maclaurin series!convert to polynomial  plot axes intervals  plot multiple functions  We can see how closely the a Taylor polynomial resembles the original function by plotting them on the same axes. In this example, we will compare the graph of to its Taylor polynomial approximation centred at .  To begin, we construct the Taylor series expansion of , which will output the series using big O notation. This needs to be converted to a polynomial with finitely many terms. The convert() command lets Maple know that we wish for the ditto operator    taylor(sin(x), x = 0, 10); poly := convert(%,polynom);       Now that we have assigned a name to the Taylor polynomial, it can be plotted alongside to see how the shape of the Taylor polynomial expression converges to the function around .   plot( [sin(x), poly], x = -4*Pi..4*Pi, y = -10..10);    As we can see the Taylor polynomial and the original function have a very similar shape around the origin.   "
},
{
  "id": "sec_taylor_and_maclaurin_series-8",
  "level": "2",
  "url": "sec_taylor_and_maclaurin_series.html#sec_taylor_and_maclaurin_series-8",
  "type": "Example",
  "number": "17.1",
  "title": "Maclaurin Series of <span class=\"process-math\">\\({ e}^x\\)<\/span>.",
  "body": " Maclaurin Series of  The function has a very simple pattern with its higher derivatives, particularly evaluated at , so it provides for a very simple example of a Maclaurin series. Since a Maclaurin series is a Taylor series centred at , we must specify in the taylor() command. mathematical functions exponential    taylor(exp(x), x = 0);      By default, Maple has given terms as an output here. The term in this expression means \"plus a bunch more terms with power and higher\". We can specify the order (related to number of terms) of the Taylor series by adding a number as the final argument to the command.   taylor(exp(x), x = 0, 10);      Using this additional option, Maple has displayed all the terms with powers less than .  "
},
{
  "id": "sec_taylor_and_maclaurin_series-9",
  "level": "2",
  "url": "sec_taylor_and_maclaurin_series.html#sec_taylor_and_maclaurin_series-9",
  "type": "Example",
  "number": "17.2",
  "title": "Comparing a Function to its Taylor Polynomial.",
  "body": " Comparing a Function to its Taylor Polynomial  sequences and series Taylor and Maclaurin series!convert to polynomial  plot axes intervals  plot multiple functions  We can see how closely the a Taylor polynomial resembles the original function by plotting them on the same axes. In this example, we will compare the graph of to its Taylor polynomial approximation centred at .  To begin, we construct the Taylor series expansion of , which will output the series using big O notation. This needs to be converted to a polynomial with finitely many terms. The convert() command lets Maple know that we wish for the ditto operator    taylor(sin(x), x = 0, 10); poly := convert(%,polynom);       Now that we have assigned a name to the Taylor polynomial, it can be plotted alongside to see how the shape of the Taylor polynomial expression converges to the function around .   plot( [sin(x), poly], x = -4*Pi..4*Pi, y = -10..10);    As we can see the Taylor polynomial and the original function have a very similar shape around the origin.  "
},
{
  "id": "sec_if_elif_else_statements",
  "level": "1",
  "url": "sec_if_elif_else_statements.html",
  "type": "Section",
  "number": "18.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">if<\/code>\/<code class=\"code-inline tex2jax_ignore\">else<\/code> and <code class=\"code-inline tex2jax_ignore\">elif<\/code> Statements",
  "body": " if \/ else and elif Statements  conditional statements if\/else statements  conditional statements if\/elif\/else statements   If and else statements allow us to test various conditions. The result then changes based on whether the given condition is true or false .  For example, let's say that someone makes the statement \"If it's sunny tomorrow, then I will go for a bike ride.\" If it is, in fact, sunny tomorrow, then that person will go for a bike ride. In other words, since the \"sunny tomorrow\" condition becomes TRUE, then the following implication \"go for a bike ride\" will happen.  As the statement stands now, we have no idea what this person will do if it is not sunny. Perhaps they will still go for a bike ride, perhaps not. We can define this action with an else statement.  In other words, we can define what will happen if it is not sunny . For example: \"If it's sunny tomorrow, then I will go for a bike ride. Otherwise, I will read a book at home.\"   From this example, we know that the following are true.  If it's sunny tomorrow, then I will go for a bike ride.  If it's not sunny tomorrow, then I read a book at home.     Conditional Based on Numerical Value  We will outline this concept with a silly example. We define two variables and . If is true (which it is because obviously is less than ), we print the word \"Mario\". Otherwise (if it's false ), we print the word \"Luigi\". Therefore, we expect that \"Mario\" will be printed. \\begin{maplegroup} \\begin{mapleinput}   You can use Shift+Enter to create multiple lines within the same Maple input and hit Enter to run them all at once.    a := 2: b := 5:  if a < b then print(\"Mario\") else print(\"Luigi\") end if        Conditional Based on Even\/Odd  Now we consider a more useful example. We define a function and check whether substituting into this function outputs an even number or an odd number.  The type() command is used here to check if the expression has the specified property. Maple recognizes a wide variety of different types, including even and odd .   f(x) := x^2 + 3*x - 4:  if type(f(2), even) then print(f(2), \"even\") else print(f(2), \"odd\") end if        Conditional Based on Finite\/Infinite  limit  In this example, we define a function and then use an if statement to verify whether or not the limit of as approaches is numeric . In other words, we are checking to see whether or not this limit exists (and is finite).   f(x) := 1\/x:  L := limit(f(x), x=0):  if type(L, numeric) then print(\"Limit is defined\") else print(\"Limit is undefined\") end if       The elif (else if) command allows us to add more than one condition to our statement. For example, if we want to test whether a particular number is (i) positive, (ii) negative, or (iii) zero, and wish to have different outputs based on these three possibilities, we can do so with a combination of if , else , and elif .   Multiple Conditional Based on Numerical Value  In this example, we will use one of these statements to illustrate the first derivative test in calculus. We would like to answer the following question: for a particular value , is the function (i) increasing (positive derivative), (ii) decreasing (negative derivative), or (iii) neither increasing nor decreasing (zero derivative)?   g(x) := x^4 - 4*x^3 + 3*x^2:  a := 0:  if subs(x = a, diff(g(x), x)) > 0 then print(\"increasing\") elif subs(x = a, diff(g(x), x)) < 0 then print(\"decreasing\") else print(\"neither\") end if      This implies that is equal to .   "
},
{
  "id": "sec_if_elif_else_statements-9",
  "level": "2",
  "url": "sec_if_elif_else_statements.html#sec_if_elif_else_statements-9",
  "type": "Example",
  "number": "18.1",
  "title": "Conditional Based on Numerical Value.",
  "body": " Conditional Based on Numerical Value  We will outline this concept with a silly example. We define two variables and . If is true (which it is because obviously is less than ), we print the word \"Mario\". Otherwise (if it's false ), we print the word \"Luigi\". Therefore, we expect that \"Mario\" will be printed. \\begin{maplegroup} \\begin{mapleinput}   You can use Shift+Enter to create multiple lines within the same Maple input and hit Enter to run them all at once.    a := 2: b := 5:  if a < b then print(\"Mario\") else print(\"Luigi\") end if      "
},
{
  "id": "sec_if_elif_else_statements-10",
  "level": "2",
  "url": "sec_if_elif_else_statements.html#sec_if_elif_else_statements-10",
  "type": "Example",
  "number": "18.2",
  "title": "Conditional Based on Even\/Odd.",
  "body": " Conditional Based on Even\/Odd  Now we consider a more useful example. We define a function and check whether substituting into this function outputs an even number or an odd number.  The type() command is used here to check if the expression has the specified property. Maple recognizes a wide variety of different types, including even and odd .   f(x) := x^2 + 3*x - 4:  if type(f(2), even) then print(f(2), \"even\") else print(f(2), \"odd\") end if      "
},
{
  "id": "sec_if_elif_else_statements-11",
  "level": "2",
  "url": "sec_if_elif_else_statements.html#sec_if_elif_else_statements-11",
  "type": "Example",
  "number": "18.3",
  "title": "Conditional Based on Finite\/Infinite.",
  "body": " Conditional Based on Finite\/Infinite  limit  In this example, we define a function and then use an if statement to verify whether or not the limit of as approaches is numeric . In other words, we are checking to see whether or not this limit exists (and is finite).   f(x) := 1\/x:  L := limit(f(x), x=0):  if type(L, numeric) then print(\"Limit is defined\") else print(\"Limit is undefined\") end if      "
},
{
  "id": "sec_if_elif_else_statements-13",
  "level": "2",
  "url": "sec_if_elif_else_statements.html#sec_if_elif_else_statements-13",
  "type": "Example",
  "number": "18.4",
  "title": "Multiple Conditional Based on Numerical Value.",
  "body": " Multiple Conditional Based on Numerical Value  In this example, we will use one of these statements to illustrate the first derivative test in calculus. We would like to answer the following question: for a particular value , is the function (i) increasing (positive derivative), (ii) decreasing (negative derivative), or (iii) neither increasing nor decreasing (zero derivative)?   g(x) := x^4 - 4*x^3 + 3*x^2:  a := 0:  if subs(x = a, diff(g(x), x)) > 0 then print(\"increasing\") elif subs(x = a, diff(g(x), x)) < 0 then print(\"decreasing\") else print(\"neither\") end if      This implies that is equal to .  "
},
{
  "id": "sec_for_while_loops",
  "level": "1",
  "url": "sec_for_while_loops.html",
  "type": "Section",
  "number": "18.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code>\/<code class=\"code-inline tex2jax_ignore\">while<\/code> Loops",
  "body": " for \/ while Loops  loops for  loops while   For loops allow us to carry out a computation repeatedly for an entire range of values. We can also combine these loops with conditional statements like if and else , as we will see in . To use a for loop, we are required to type   for i from a to b do ... ... end do   where is a dummy variable , referred to as an index. On the first iteration of the loop, the index begins at . At the end of each iteration, the index is incremented by one. In the last iteration, the index will be equal to and the loop will terminate. This means that the lines of code within the loop will be executed a set number of times.   Outputting the First Derivatives  mathematical functions sine  We will use a basic for loop to output the first derivatives of the function . To do this, we will use the diff() command within the loop. The for loop will output the th derivative, starting from and ending at .   Recall that diff(f(x), x$k) is the th derivative of with respect to . Use of the diff() command is explained in . derivative diff!higher derivatives     f(x) := sin(2*x);       for k from 1 to 10 do diff(f(x), x$k) end do                Adding a while is a short way of adding a condition to the for loop. This additional condition may terminate the loop early once its condition is no longer met.   Summing Squares Using a While Loop  In this example, let's say we want to add the first few squares together: until becomes greater than or equal to . We can make this a while condition on the loop: . This condition will be checked for every iteration on the loop and the moment that this condition is no longer met, the loop terminates.  The loop itself will increment for each iteration. We will need to assign an initial total of zero and add the value of to it each iteration, reassigning the updated value.   total := 0:  for i from 1 while i^2 < 100 do total := total + i^2 end do               The updated value of the total is displayed at the end of each iteration and the overall sum is . This example could easily be accomplished using a simple sum() command, although it is useful to understand how to use a for \/ while loop.   "
},
{
  "id": "sec_for_while_loops-7",
  "level": "2",
  "url": "sec_for_while_loops.html#sec_for_while_loops-7",
  "type": "Example",
  "number": "18.5",
  "title": "Outputting the First <span class=\"process-math\">\\(n\\)<\/span> Derivatives.",
  "body": " Outputting the First Derivatives  mathematical functions sine  We will use a basic for loop to output the first derivatives of the function . To do this, we will use the diff() command within the loop. The for loop will output the th derivative, starting from and ending at .   Recall that diff(f(x), x$k) is the th derivative of with respect to . Use of the diff() command is explained in . derivative diff!higher derivatives     f(x) := sin(2*x);       for k from 1 to 10 do diff(f(x), x$k) end do               "
},
{
  "id": "sec_for_while_loops-9",
  "level": "2",
  "url": "sec_for_while_loops.html#sec_for_while_loops-9",
  "type": "Example",
  "number": "18.6",
  "title": "Summing Squares Using a While Loop.",
  "body": " Summing Squares Using a While Loop  In this example, let's say we want to add the first few squares together: until becomes greater than or equal to . We can make this a while condition on the loop: . This condition will be checked for every iteration on the loop and the moment that this condition is no longer met, the loop terminates.  The loop itself will increment for each iteration. We will need to assign an initial total of zero and add the value of to it each iteration, reassigning the updated value.   total := 0:  for i from 1 while i^2 < 100 do total := total + i^2 end do               The updated value of the total is displayed at the end of each iteration and the overall sum is . This example could easily be accomplished using a simple sum() command, although it is useful to understand how to use a for \/ while loop.  "
},
{
  "id": "sec_for_loops_with_conditionals",
  "level": "1",
  "url": "sec_for_loops_with_conditionals.html",
  "type": "Section",
  "number": "18.3",
  "title": "Combining Loops and Conditionals",
  "body": " Combining Loops and Conditionals  loops for  conditional statements if\/else statements  conditional statements if\/elif\/else statements  We now combine all of the various conditional statements and loops together into one example.   Outputting the Primes up to  In this example, we will create a small loop through the integers from 1 and to 50, only outputting the integer if it is prime.  Creating a loop that prints every integer from 1 to 50 is fairly simple:   You can use Shift+Enter to create multiple lines within the same Maple input.    for i from 1 to 50 do print(i); end do   We only need to include an if statement inside the loop that runs the print() command when is prime. We can make use of the isprime() command for this if statment and we do not require an else . isprime    for i from 1 to 50 do if isprime(i) then print(i); end if end do                In this example, we will test to see whether a function is (i) increasing ( ), (ii) decreasing ( ), or (iii) neither (critical point ( )) at a variety of -values.   Note that we can use any letter for the loop index, but the most common choices are , , , and .   In this case, the for loop is given an ordered list of values for which to apply the first derivative test. The test performs its iterations and conditionals as follows:  Begin with the value .  If , then is increasing at .  If , then is decreasing at .  If , then is neither increasing nor decreasing at .  Update to the next value in the list and repeat steps through .  Within each iteration, the value of is output, along with whether is increasing, decreasing, or neither at that value.   g(x) := x^4 - 4*x^3 + 3*x^2:  for j in [-2, 0, 4] do if subs(x = j, diff(g(x), x)) > 0 then print(j, \"increasing\") elif subs(x = j, diff(g(x), x)) < 0 then print(j, \"decreasing\") else print(j, \"neither\") end if end do      From the output, we an see that , , and .   "
},
{
  "id": "sec_for_loops_with_conditionals-6",
  "level": "2",
  "url": "sec_for_loops_with_conditionals.html#sec_for_loops_with_conditionals-6",
  "type": "Example",
  "number": "18.7",
  "title": "Outputting the Primes up to <span class=\"process-math\">\\(50\\)<\/span>.",
  "body": " Outputting the Primes up to  In this example, we will create a small loop through the integers from 1 and to 50, only outputting the integer if it is prime.  Creating a loop that prints every integer from 1 to 50 is fairly simple:   You can use Shift+Enter to create multiple lines within the same Maple input.    for i from 1 to 50 do print(i); end do   We only need to include an if statement inside the loop that runs the print() command when is prime. We can make use of the isprime() command for this if statment and we do not require an else . isprime    for i from 1 to 50 do if isprime(i) then print(i); end if end do              "
},
{
  "id": "sec_for_loops_with_conditionals-7",
  "level": "2",
  "url": "sec_for_loops_with_conditionals.html#sec_for_loops_with_conditionals-7",
  "type": "Example",
  "number": "18.8",
  "title": "",
  "body": " In this example, we will test to see whether a function is (i) increasing ( ), (ii) decreasing ( ), or (iii) neither (critical point ( )) at a variety of -values.   Note that we can use any letter for the loop index, but the most common choices are , , , and .   In this case, the for loop is given an ordered list of values for which to apply the first derivative test. The test performs its iterations and conditionals as follows:  Begin with the value .  If , then is increasing at .  If , then is decreasing at .  If , then is neither increasing nor decreasing at .  Update to the next value in the list and repeat steps through .  Within each iteration, the value of is output, along with whether is increasing, decreasing, or neither at that value.   g(x) := x^4 - 4*x^3 + 3*x^2:  for j in [-2, 0, 4] do if subs(x = j, diff(g(x), x)) > 0 then print(j, \"increasing\") elif subs(x = j, diff(g(x), x)) < 0 then print(j, \"decreasing\") else print(j, \"neither\") end if end do      From the output, we an see that , , and .  "
},
{
  "id": "app_common_errors",
  "level": "1",
  "url": "app_common_errors.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Common Errors",
  "body": " List of Common Errors  In this section, we will review some of the most common errors encountered when using Maple. Many of these errors are caused when using 2D Math, which makes complicated expressions look pretty but can cause other issues. For a description of font styles, see .   Missing Brackets  In Maple, we will use several types of brackets such as parentheses, square brackets, and curly braces. Maple refers to these as delimiters. If these delimiters are not found in pairs, then Maple will be unable to understand the syntax of your command.   In this example, there is an open square bracket, but no square closed bracket.   plot( [f(x), g(x), x =-5..5);  Error, mismatched or missing bracket      Spelling Errors  Maple cannot correct for poor spelling. If a command is misspelled, then it will treat the command as a variable name.   Maple doesn't know to solve this equation if you don't spell the solve() command properly!   slove(x^2 = 4);        The % Shortcut Not Working as Intended  The % shortcut will only use the output command that was last run and not necessarily the output of the command that is on the Maple input immediately above. It is usually a good practice to use the % operator on the same line as the previous command to avoid this issue.   In this example, the expected output of the second command is the decimal value of , which is equal to . However, it appears that the second command was run again after the running third, producing the decimal approximation of the third command.   This error could have been avoided by combining the first two commands into one Maple input.   subs(x=Pi,cos(x)); evalf(%);     subs(x = Pi, cos(x));       evalf(%)       fsolve(x^3 + 4*x = 3);         Missing Multiplication Between Variables  Whenever two variables (such as and ) are multiplied together, you must explicitly include the multiplication sign between them. If no * or space is included between the variables, it may be interpreted as an entirely different variable name.   In this example, no multiplication was included between and . Maple mistakenly thinks that is the name of a third variable.   implicitplot(x^2 + y^2 = 6xy, x =-5..5, y =-5..5);  invalid input: the following extra unknowns were found in the input expression: xy      Spaces and Parentheses: Multiplication versus Functions  When typing in 2D Math (the default font), spaces and parentheses may be interpreted by Maple in unintended ways. When using commands, make sure that there is no space between the command name and its parentheses. This will be treated as multiplication.   In this example, Maple thinks that the word plot should be multiplied by the expression in parentheses. This is why the name of the command appears in the output.   plot (x^2 + 5);        Similarly, if there is no space or * between a variable name and the parentheses, the notation may be mistaken as function notation.   Clearly, Maple should be able to expand this basic expression. However, it misinterprets the user's input as being function notation. Maple reads this expression as of .   expand(2*x(x^3 - 1));          Assigning Expressions to or Other Common Variable Names  It's never a good idea to assign an expression to , , , or other common variable names. If you want to unassign everything at once, you can do this with the restart command on a separate line.   You will need to load any required packages again after running the restart command.    In this example, the value is assigned to , so the expression is equal to the value . This is remedied after using the restart command.   x := 3;       factor(x^2 - 4x - 12);       restart; factor(x^2 - 4x - 12);         Equals Signs versus Assignment Operator  The equals sign = must be used for an equation and the assignment operator := is used to store a value or expression for later use.   The equals sign should be used for the subs() command here, since we are not assigning the value for the remainder of the document.   subs(x := 5, cos(x) - 1);  Error, invalid assignment      Changing the Order of the Parameters in a Command  Many commands have multiple parameters and often the order in which the parameters is listed is important. Typing the parameters in an incorrect order in certain commands may cause an error message to be displayed when the command is executed.   In this example, the two parameters in the subs() command need to be interchanged.   subs(4x-3, x=2);  Error, invalid input: subs received 4x-3, which is not valid for its 1st argument      Assigning a Function and Not Using Function Notation  If you have assigned a function (such as ) in Maple, make sure to use function notation in other commands, rather than using only the name of the function.   In this example, the factor() command should be factor(f(x)) .   f(x) := x^2 - 4;       factor(f);         Case-Sensitive Commands  Commands are case-sensitive. Make sure to use the correct capitalization.   The correct command here is solve() , which needs a lowercase s .   Solve(3*x + 5 = 2);       There are examples of commands where the capitalized version behaves differently from the non-capitalized version.   In this example, the Int() command and int() command behave differently. Using Int() followed by value(%) is a good way to display the integral and then evaluate it.   Int(2*x, x = 10 .. 13)       int(2*x, x = 10 .. 13)        "
},
{
  "id": "app_common_errors-3-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-3-3",
  "type": "Example",
  "number": "A.1",
  "title": "",
  "body": " In this example, there is an open square bracket, but no square closed bracket.   plot( [f(x), g(x), x =-5..5);  Error, mismatched or missing bracket   "
},
{
  "id": "app_common_errors-4-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-4-3",
  "type": "Example",
  "number": "A.2",
  "title": "",
  "body": " Maple doesn't know to solve this equation if you don't spell the solve() command properly!   slove(x^2 = 4);      "
},
{
  "id": "app_common_errors-5-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-5-3",
  "type": "Example",
  "number": "A.3",
  "title": "",
  "body": " In this example, the expected output of the second command is the decimal value of , which is equal to . However, it appears that the second command was run again after the running third, producing the decimal approximation of the third command.   This error could have been avoided by combining the first two commands into one Maple input.   subs(x=Pi,cos(x)); evalf(%);     subs(x = Pi, cos(x));       evalf(%)       fsolve(x^3 + 4*x = 3);      "
},
{
  "id": "app_common_errors-6-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-6-3",
  "type": "Example",
  "number": "A.4",
  "title": "",
  "body": " In this example, no multiplication was included between and . Maple mistakenly thinks that is the name of a third variable.   implicitplot(x^2 + y^2 = 6xy, x =-5..5, y =-5..5);  invalid input: the following extra unknowns were found in the input expression: xy   "
},
{
  "id": "app_common_errors-7-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-7-3",
  "type": "Example",
  "number": "A.5",
  "title": "",
  "body": " In this example, Maple thinks that the word plot should be multiplied by the expression in parentheses. This is why the name of the command appears in the output.   plot (x^2 + 5);       "
},
{
  "id": "app_common_errors-7-5",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-7-5",
  "type": "Example",
  "number": "A.6",
  "title": "",
  "body": " Clearly, Maple should be able to expand this basic expression. However, it misinterprets the user's input as being function notation. Maple reads this expression as of .   expand(2*x(x^3 - 1));       "
},
{
  "id": "app_common_errors-8-4",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-8-4",
  "type": "Example",
  "number": "A.7",
  "title": "",
  "body": " In this example, the value is assigned to , so the expression is equal to the value . This is remedied after using the restart command.   x := 3;       factor(x^2 - 4x - 12);       restart; factor(x^2 - 4x - 12);      "
},
{
  "id": "app_common_errors-9-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-9-3",
  "type": "Example",
  "number": "A.8",
  "title": "",
  "body": " The equals sign should be used for the subs() command here, since we are not assigning the value for the remainder of the document.   subs(x := 5, cos(x) - 1);  Error, invalid assignment   "
},
{
  "id": "app_common_errors-10-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-10-3",
  "type": "Example",
  "number": "A.9",
  "title": "",
  "body": " In this example, the two parameters in the subs() command need to be interchanged.   subs(4x-3, x=2);  Error, invalid input: subs received 4x-3, which is not valid for its 1st argument   "
},
{
  "id": "app_common_errors-11-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-11-3",
  "type": "Example",
  "number": "A.10",
  "title": "",
  "body": " In this example, the factor() command should be factor(f(x)) .   f(x) := x^2 - 4;       factor(f);      "
},
{
  "id": "app_common_errors-12-3",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-12-3",
  "type": "Example",
  "number": "A.11",
  "title": "",
  "body": " The correct command here is solve() , which needs a lowercase s .   Solve(3*x + 5 = 2);      "
},
{
  "id": "app_common_errors-12-5",
  "level": "2",
  "url": "app_common_errors.html#app_common_errors-12-5",
  "type": "Example",
  "number": "A.12",
  "title": "",
  "body": " In this example, the Int() command and int() command behave differently. Using Int() followed by value(%) is a good way to display the integral and then evaluate it.   Int(2*x, x = 10 .. 13)       int(2*x, x = 10 .. 13)      "
},
{
  "id": "app_common_commands",
  "level": "1",
  "url": "app_common_commands.html",
  "type": "Appendix",
  "number": "B",
  "title": "List of Common Commands",
  "body": " List of Common Commands      Keyboard Shortcuts    Ctrl+J, Ctrl+K  New execution group (after or before current line)    Ctrl+Shift+J, Ctrl+Shift+K  New paragraph (after or before current line)    Ctrl+T  Convert line to Paragraph    Ctrl+M  Convert line to Maple input    Ctrl+.  Indent section    Ctrl+,  Unindent section    Ctrl+Delete  Delete section    F4  Merge consecutive execution groups    F5  Toggle between Text, Nonexecutable Math, and Math types        Common Expressions    exp(x)  The natural exponential function    sqrt(x)  The square root function    surd(x,n)  The primitive th root,    abs()  The absolute value function        Manipulating Expressions    name := expression  Assignment operator    subs(x=a, expression)  Evaluate an expression at    evalf(expression)  Evaluate the given expression as a decimal    factor(expression)  Factor the given expression    simplify(expression)  Simplify the given expression    expand(expression)  Expand the given expression    collect(expression,var)  Collect terms of the expression by the specified variable        Solving Equations    solve(equation,var)  Solves the given equation for the specified variable    fsolve(equation,var)  Solves the given equation for the specified variable (as a decimal)    fsolve(equation,var=a..b)  Solves the given equation for the specified variable (as a decimal) on the interval    solve( {eqn1,eqn2},{var1,var2})  Solves a system of equations for all specified variables    fsolve({eqn1,eqn2},{var1,var2})  Solves a system of equations for all specified variables (as a decimal)        Defining Functions    name(var) := expression  Assigns a function of the specified variable    name := unapply(expression,var)  Convert an expression to a function of the specified variable    name(var) := piecewise(condition,expr, ..., condition,expr)  Create a piecewise function of the specified variable where each condition is an interval            Plotting Functions    plot(f(x),x=a..b)  Plot the given function, , over the interval    plot([f(x),g(x)],x=a..b)  Plot two functions, and , over the interval        Additional Plot Parameters (Include these after necessary parameters)    y=c..d  Only plot the range    discont=true  Includes discontinuities in a plot    colour=blue  Specify the colour for a graph (black, blue, red, etc.)    linestyle=dotted  Specify the style of the line (dash, dot, etc.)        Limits    limit(expression,var=a)  Find the limit of the expression as var approaches    limit(expression,var=a,right)  Find the limit of the expression as var approaches from the right    limit(expression,var=a,left)  Find the limit of the expression as var approaches from the left    limit(expression,var=infinity)  Find the limit of the expression as var approaches infinity        Derivatives    diff(expression,var)  The derivative of the given expression with respect to variable    diff(expression,var,var)  The second derivative of the given expression with respect to variable    diff(expression,var$2)  The second derivative of the given expression with respect to variable    f'(var)  The derivative of the function with respect to variable    f^(n)(var)  The th derivative of the function with respect to variable        Implicit Functions (requires \"plots\" package for plotting)    implicitplot(equation,x=a..b,y=c..d)  Plot the implicit function over the specified region    implicitdiff(equation,y,x)  The derivative of the implicit function, given as        Riemann Sums and Numerical Integration (requires \"Student[Calculus1]\" package)    ApproximateInt(f(x),x=a..b)  Approximate the definite integral of from to        Additional ApproximateInt Parameters (Include these after necessary parameters)    method=left  Choose left rectangles for approximation    method=right  Choose right rectangles for approximation    method=lower  Choose lower bound rectangles for approximation    method=upper  Choose upper bound rectangles for approximation    method=midpoint  Choose midpoint rectangles for approximation    method=trapezoid  Choose trapezoid rule approximation    method=simpson  Choose Simpson's rule approximation    output=sum  Output summation notation for given approximation method    output=value  Output exact value of approximation    output=plot  Output graph of integrand function and approximation    output=animation  Output animation of approximation as increases    partition=n  Use equally spaced subintervals for approximation        Sequences and Series    expression $ var=a..b  Display the sequence of the expression from var = up to var =    seq(expression,var=a..b)  Display the sequence of the expression from var = up to var =    Sum(expression,var=a..b)  Display the sum for the expression from var = up to var =    sum(expression,var=a..b)  Give the value of the sum of the expression from var = up to var =    taylor(f(x),x=a,n)  Give the Taylor series expansion of about , including terms up to power        Integrals    Int(f(x),x)  The indefinite integral, display \"inert\" form    int(f(x),x)  The indefinite integral, evaluated    Int(f(x),x=a..b)  The definite integral over the specified interval, display \"inert\" form    int(f(x),x=a..b)  The definite integral over the specified interval, evaluated        Differential Equations    dsolve(DE, y(x))  Solves the given differential equation for    dsolve([DE, ICs], y(x))  Solves the given differential equation with initial conditions for        Direction Fields (Requires DEtools package)    DEplot(DE,y(x),x=a..b,y=a..b)  Plot the direction field for the differential equation    DEplot(DE,y(x),x=a..b,y=a..b,[ICs])  Plot the direction field for the differential equation with initial conditions        Additional DEplot Parameters (Include these after necessary parameters)    arrows=line  Use lines for the direction field, rather than arrows    colour=black  Change arrow colour    linecolour=blue  Change solution curve colour    "
},
{
  "id": "the-index",
  "level": "1",
  "url": "the-index.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
