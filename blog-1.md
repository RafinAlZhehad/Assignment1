# Any labled as a type safety hole.

Using any teels the compiler to ignore the variable. It is a type safety hole as it allows for operation that might fail. It increases runtime error and difficult to debug.

```
let value: any = "Hello";

value.toUpperCase();
value.xyz();
value();

```

## It will not give any error even if we use wrong method or function.

# Using unknown is safe

Because we can keep data but before using it we have to do type check

```
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
//Typescript is checking the value is string or not
```

# Why unknown is better:

- Enforce Type Checking
- Create sater code
- Easy to maintain

# Type Narrowing

# # This is the gatekeeper for "unknown". we use

Type narrowing is a process where Typescript use runtime check to narrow down possible types of variable.

- Type Guards: typeof value === "string"
- Truthiness: if (value) { ... }
- Instanceof: if (value instanceof Date) { ... }
