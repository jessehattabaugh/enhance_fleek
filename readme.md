# {{ repository.name }}

{{ repository.description }}

## Getting Started

Install dependencies by running `npm install`.

## Deployment

This project is hosted on Fleek. To deploy first login to Fleek by running `npx fleek login`.

Then you must "create" or "switch" to a "project" on Fleek; run `npx fleek projects create`. T

To deploy the static site run `npx fleek sites deploy`

To deploy the functions run `npx fleek functions deploy --name [function name] --path [path to function]`
