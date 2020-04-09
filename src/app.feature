Feature: App - clean provided array of digits

Scenario: Increment string array digits with two leading 0
  Given I am a user attempting to pass [0,0,3,0,7,8,9] as array of digits
  Then Counter should display [30789]

Scenario: Increment string array digits with no leading 0
  Given I am a user attempting to pass [3,0,7,8,9] as array of digits
  Then Counter should display [30789]

Scenario: Increment string array digits with six leading 0
  Given I am a user attempting to pass [0,0,0,0,0,0,3,0,7,8,9] as array of digits
  Then Counter should display [30789]