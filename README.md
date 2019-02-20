# ngAlertTest

## Overview

This is a sample app to test and document the alerts in Project Clarity, maily to see what I can get it to do

## Test Case

Create a component that you can bind to a generic alert object
- Can you elevate an alert to app level on the fly?
- Can you turn an alert on and off on the fly?
- Can you adjust an alert's contents easily? (maybe for displaying a countdown?)
- Can you bind the control to multiple alerts?
- Does adding a new alert add to the alert count?
- Use an array to hold these alert objects?
- Generate a selection of generic alerts that can be passed a variable or two?
    - Make the alerts multi-lingual or at least try?
- Make the alert test a feature module and route it along with another module

## Document EVERYTHING

You always do something and then forget, so document the shit out of this as it serves no other purpose

### Steps

Create new Angular app with `ng new ngAlertTest --prefix ngat --routing`
Install Clarity  with `ng add @clr/angular`
Create alerts module with `ng g m alerts --routing=true`
Create inventory(blank) module with `ng g m inventory --routing=true`
Create new alerts component in alerts module with `ng g c alerts/alert --module=alerts --prefix=nga`
Create new inventory component (main) in inventory module with `ng g c inventory/main --export=true --module=inventory --prefix=nga`
Set up routes in app-routing.module
Create a 404 page with `ng g c PageNotFound`

