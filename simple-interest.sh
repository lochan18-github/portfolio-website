#!/bin/bash

# Simple Interest Calculator Script

echo "Simple Interest Calculator"

# Formula explanation
echo "Formula: Simple Interest = (Principal × Rate × Time) / 100"

echo "-----------------------------------------"

# Taking user inputs
echo "Enter the Principal amount:"
read principal

echo "Enter the Rate of Interest:"
read rate

echo "Enter the Time period:"
read time

# Calculating Simple Interest
simple_interest=$((principal * rate * time / 100))

echo "-----------------------------------------"

# Displaying results
echo "Principal: $principal"
echo "Rate of Interest: $rate"
echo "Time Period: $time"

echo "-----------------------------------------"
echo "Simple Interest = $simple_interest"

echo "-----------------------------------------"
echo "Calculation completed successfully."
