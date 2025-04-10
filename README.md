# 🚧 Pixi ECS Engine (early development) 🚧

An ECS (entity-component-system) game engine built around [Pixi.js](https://pixijs.com), just for fun.

## Project Setup

### Nix/Devenv

It is not required, but if you happen to use Nix (HomeManager, NixOS, Nix-Darwin), configuring the environment is pretty simple.
If you have no idea what I'm talking about, skip to the next section or go check out the docs:

- [Nix](https://nixos.org/explore/) - Find out why so many developers, system administrators and other enthusiasts use Nix and cannot imagine a world without it.
- [Nix Darwin](https://github.com/nix-darwin/nix-darwin) - Basically NixOs for Mac
- [Home Manager](https://nix-community.github.io/home-manager/)
- [devenv](https://devenv.sh/) - Fast, Declarative, Reproducible and Composable Developer Environments using Nix

**Enable direnv**

```bash
direnv allow
```

This will ensure that all of the system dependencies (pretty much just node 20) exist on your system.

### Nx

[Nx](https://nx.dev/) is a monorepo tool that makes it easy to manage multiple packages and applications in a single repo. It is definitely overkill for this project, but since I wanted to include some demos it seemed like a pretty good fit.

**Install dependencies**

```bash
npm Install
```

## Developer Tasks

**Build the library**

```bash
npx nx build engine
```

This will output the built library including .dts files to `libs/engine/dist`.

**Run tests**

```bash
npx nx test engine
```

## Demos

I've included some simple demos in `demos/` using the library, which are also intended to be sort of end-to-end tests.

**Run a demo**

```bash
npx nx run santa:dev
```
