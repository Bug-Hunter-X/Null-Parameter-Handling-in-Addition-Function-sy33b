# Null Parameter Handling in JavaScript Function

This repository demonstrates a common JavaScript error related to unexpected null parameter handling in a simple addition function.

## Bug Description

The `foo` function is designed to add two numbers. However, it exhibits unexpected behavior when one or both parameters are `null`.  The current implementation returns `null` if either input is null but it might be more useful to throw an error, or return a default value.