# Fly.io static hosting

This deployment path avoids browser automation and private container-registry
credentials. It serves the already-built static studio through the official
NGINX Alpine image on a small Fly Machine.

## Release preparation

```sh
npm ci
npm run build
tar -C dist -czf hosting/openline-brand-dist.tar.gz .
```

Commit the bundle to the public brand repository under `launch-studio/hosting/`.
The Fly Machine pins its download URL to a full Git commit and verifies a SHA-256
checksum before serving it. No repository credential is needed in the container.
The bundle contains only the same public static files as the approved preview.

## Provisioning

`scripts/fly_operation.py` uses the Fly Machines HTTPS API. Run it only with the
approved Fly organization credential attached by Computer's secure proxy.
It never reads or stores a raw token. Outside Computer, supply authentication
through an appropriate credential-aware HTTP transport.

1. Inspect the intended organization and app; do not overwrite an unrelated app.
2. Create `openline-brand` in the confirmed organization.
3. Allocate shared IPv4 and IPv6 for the new app.
4. Create one small, shared-CPU Machine with the release commit.
5. Verify its health check, HTTPS page, icon controls and download packages.

The API configuration requests Madrid (`mad`), 256 MB memory, one shared CPU,
HTTPS redirect, health checks, autostart and idle autostop with zero minimum
running Machines. No database, volume, API secret, dedicated IPv4, or external
write endpoint is required. Fly compute/transfer usage follows the account's
applicable billing.

The bootstrap reuses a checksum-verified cached release when possible. A first
boot needs access to the public GitHub release bundle. If download or checksum
validation fails, the server does not start with an unverified bundle.

## Updates

Build and commit a new bundle, then call `update-machine` with the same app and
Machine ID and the new full Git commit. The script verifies the existing
Machine's purpose marker before updating and preserves the resolved image digest.
Updates are explicit; no automatic GitHub Actions deployment is configured.

## Status

Hosting files are prepared. Provisioning and live URL verification are pending
authorization to use the saved Fly.io organization credential.

Official API guidance:
https://docs.fly.io/machines/api/apps-resource
https://docs.fly.io/machines/api/machines-resource
https://docs.fly.io/networking/services/
