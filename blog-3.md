# Generics allow you to write code that works with multiple types while maintaining full type information.

## It helps writting reusable code maintaining type safety.

### Problem Without Generics

```
function identity(value: string): string {
  return value;
}
```

#### But now for number we have to write another function.

```
function identityNumber(value: number): number {
  return value;
}

```

#### So it creates duplication of code.

# Solution Using Generics

```
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(123);
identity<boolean>(true);
```

### Here function can handle all type.

# Type Safety of Generics

```
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const result = getFirstElement([1, 2, 3]);
```

Here Typescript automatically understand that:

#### result -> number

##### Benefits of Generic:

- Reusable Code
- Type Safety
- Better Autocomplete
- Clean Code
