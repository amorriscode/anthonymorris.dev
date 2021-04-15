# CLI Tricks

## Change Many File Extensions

```bash
find app/src -name "\*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \\;
```

This code snippet will find all `.js` files under `app/src` and then rename them with `.ts` instead of `.js`.