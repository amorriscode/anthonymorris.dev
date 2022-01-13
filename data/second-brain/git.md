# git

## Replace branch with another

If we want to replace `qa-staging` with `main`, you can do it like this:

```bash
git fetch && git push -f origin origin/main:qa-staging
```

