#!/bin/bash

# Simple Interest Calculator

echo "Simple Interest Calculator"

# Taking user inputs
echo "Enter Principal:"
read principal

echo "Enter Rate of Interest:"
read rate

echo "Enter Time Period:"
read time

# Calculating Simple Interest
simple_interest=$((principal * rate * time / 100))

# Displaying result
echo "----------------------------------"
echo "Principal: $principal"
echo "Rate of Interest: $rate"
echo "Time Period: $time"
echo "Simple Interest = $simple_interest"
