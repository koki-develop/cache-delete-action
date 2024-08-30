# Cache Delete Action

[![GitHub Release](https://img.shields.io/github/v/release/koki-develop/cache-delete-action)](https://github.com/koki-develop/cache-delete-action/releases/latest)
[![CI](https://img.shields.io/github/actions/workflow/status/koki-develop/cache-delete-action/ci.yml?branch=main&logo=github&style=flat&label=ci)](https://github.com/koki-develop/cache-delete-action/actions/workflows/ci.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/koki-develop/cache-delete-action/build.yml?branch=main&logo=github&style=flat&label=build)](https://github.com/koki-develop/cache-delete-action/actions/workflows/build.yml)

Delete a cache for a given key.

## Usage

```yaml
uses: koki-develop/cache-delete-action@v1
with:
  key: '<cache-key>'
```

### Inputs

| Name | Default | Required | Description |
| ---- | -------- | -------- | ----------- |
| `key` | | **Yes** | A key for identifying the cache. |
| `ref` | | No | By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref. |
| `token` | `${{ github.token }}` | No | The token to use to delete the cache. |
| `fail-on-not-found` | `false` | No | Whether to fail the action if the cache is not found. |

## LICENSE

[MIT](./LICENSE)
