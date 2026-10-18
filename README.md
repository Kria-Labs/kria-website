# kria-website

Documentation website for the [Kria Programming Language](https://github.com/Kria-Labs/kria-lang).

Live: [krialang.vercel.app](https://krialang.vercel.app)



## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — features, pipeline overview, quick example |
| `docs.html` | Documentation hub |
| `docs/` | Language guides, built-ins, performance, and architecture |
| `playground.html` | Browser-based editor preview (the Kria runtime is not connected) |
| `kpm.html` | Kria Package Manager page |
| `about.html` | About Kria Labs |

Download ready-to-use Kria releases from [GitHub Releases](https://github.com/Kria-Labs/kria-lang/releases); building from source is optional.

## Links

Configured in `js/config.js`:

| Key | Repository |
|-----|------------|
| `org` | [Kria-Labs](https://github.com/Kria-Labs) |
| `lang` | [kria-lang](https://github.com/Kria-Labs/kria-lang) |
| `vscode` | [kria-vscode](https://github.com/Kria-Labs/kria-vscode) |
| `kpm` | [kpm](https://github.com/Kria-Labs/kpm) |
| `website` | [kria-website](https://github.com/Kria-Labs/kria-website) |

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## License

MIT — see [LICENSE](LICENSE).
