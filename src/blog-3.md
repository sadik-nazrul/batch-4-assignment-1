<!-- Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases. -->

# Type Guards in TypeScript: Why They’re Necessary and Common Use Cases

Type guards in TypeScript are like "type-checking watchmen" for your code. They allow you to **narrow down types** to ensure that the types of inputs or outputs in a given context are valid. If a type matches the expected condition, the process continues; otherwise, TypeScript prevents the code from proceeding, helping to reduce runtime errors. Type guards help ensure **type safety** and make your code robust and error-free, making them essential in TypeScript development.

## Types of Type Guards and Use Cases

### `typeof` Type Guard

The `typeof` type guard is used for **primitive data types** like `string`, `number`, `boolean`, `symbol`, and `bigint`. It helps you narrow down a variable’s type based on primitive type checks.

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Squared number:", value * value);
  }
}
```

### `in` Type Guard

The `in` type guard is used for `object`. It helps you to find property have in the object.

```typescript
interface Holder {
  name: string;
}
interface Owner {
  name: string;
  owner: "Yes";
}

function isOwner(value: Holder | Owner) {
  if ("owner" in value) {
    console.log("This is the property owner");
  } else {
    console.log(`${value.name} is not owner of this property`);
  }
}

const realOwner: Owner = {
  name: "Sadik",
  owner: "Yes",
};

const fake: Holder = {
  name: "kalam",
};
```

### `inctanceof` Type Guard
