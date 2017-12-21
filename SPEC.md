# Form Creation App

The Form Creation App will allow insurance companies to create custom forms for different types of insurances. The form creation app should enable the user (the insurance agent or employee) to add questions in the form of inputs and text. 

## Header & Nav

The header should incorporate a logo (BriteCore) and a main navigation. The main navigation should include links for forms, templates, help, and a user profile.

- Logo
- Forms
- Templates
- Help
- Profile

## Sub Head & Sub Nav

The sub header should show the form name. Clicking on the name would allow the user to edit the name as a text input. The sub nav should include a way to navigate between different forms, a link to the current form settings, a link to preview the current form, a link to publish the form, as well as a way to create a new form. 

- Form Name
- Form Select
- Form Settings
- Preview Form
- New Form

## Main Form

The main form area should include a default question or a set of default questions as well as a way to add new questions. Question sets should be grouped together. Each group should have a group name that is editable as well as group settings. Below the last group of questions a button or link to create a new group should be shown. Next to the create group button a page break button should be available to break up the form into multiple pages.  

## Questions

Each question should have a question 'number' (for ordering purposes), 'name' (to identify the question), 'settings', as well as a link to 'copy', 'hide', or 'delete' the question. Question 'settings' might include settings unique to a specific type of question or input type; 'copy', 'hide', and 'delete' could be shown in a 'settings' dropdown instead of individually. 

```
1. Question Name 			[Copy] [Hide] [Delete] [Settings]
```

Below the question name and settings the actual question would be shown. For example, in the case of a single line text question an editable label and single line text input would be shown. 

```
How many square feet is the home?  [ 						]
```

Clicking on the question in an un-editable area would open the question controls. The controls allow the user to change the question type as well as options specific to the type of input chosen. An option to enable validation and question validation settings would be shown here. The controls might be shown in a panel or modal. 

## Question Controls

Question type controls the input type. Underneath question type the sub-type is shown, text entry for example would include sub-types options of single line, multi line, or password. Further control settings would be shown below the sub-type, a multiple choice input for example would have options to change the number of choices as well as an option to change from single choice (radio buttons) to multiple choice (checkboxes). 

## Question Types

### Text Entry

**Text Type**
- Single Line
- Multiple Line
- Password

### Number Entry

**Number Type**
- Number
- Currency
**Currency Type**
- [list of available currencies]
**Decimal Places**

### Dropdown

~~no options~~

### Multiple Choice

**Number of Choices**
**Choice Type**
- Single Choice
- Multiple Choice

### Scale

**Scale Type**
- Points
- Stars
**Number of Points**
**Endpoints** (example: low / strongly disagree to high / strongly agree)
**Point Labels** 


### Grid (Multiple Choice Scale)

**Number of Questions**
**Number of Columns**
**Column Labels** (example: strongly disagree, disagree, agree, strongly agree)
**Choice Type**
- Single Choice
- Multiple Choice

### Date

**Date Type**
- Single Date
- Date Range

### Time

**Time Type**
- Standard
- Military
**Timezone**

### Picture

**Source**
- URL
- Upload

### File Upload

**File Size Limit**

### Payment

**Payment Type**
- Credit Card
- Bank
- Paypal
- Other

### Signature

## Save, Preview, and Publish Form

Saving should be automatic as changes are made by the user. Preview and Publish buttons should be shown in the sub navigation. Preview should open a new window or a modal with the form as it would look to the end user. Publish would make the form live and available to the end user as well as providing location info with a link to view the form. 
