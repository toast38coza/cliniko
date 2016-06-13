# cliniko


## Installation: 

```
npm install && bower install
```
## Configuration:

Config options - including the Cliniko API details can be found in: `app/scripts/services/settings.js`. 

Typically these values would be configured by a build scripts at build-time. For development, edit them to suit your needs.

## Build & development

Run `grunt` for building and `grunt serve` for preview.



## Testing

Running `grunt test` will run the unit tests with karma. (or you can run: `karma start test/karma.conf.js`

## Setting up the proxy 

The Cliniko API does not support CORS headers, so the JavaScript-only API wouldn't work from dev. 


As a solution I've included [Kong API gateway](http://getkong.com) here as a proxy. Kong is dockerized with `docker-compose`, so you can:

```
cd kong && docker-compose up -d
```

Once kong is up, the following will be available: 

* Kong API gateway: `:8000`
* Kong Admin: `:8001`
* Kong Dashboard: `:8080`

The following curl commands will set up the required proxying:

**Add the cliniko API**

```
curl -i -X POST \
  --url http://kong:8001/apis/ \
  --data 'name=cliniko' \
  --data 'upstream_url=https://api.cliniko.com' \
  --data 'request_host=api.cliniko.com' \
  --data 'request_path=/v1'
```

**Add some headers **:
```
curl -X POST http://kong:8001/apis/cliniko/plugins \
    --data "name=request-transformer" \
    --data "config.add.headers=Accept: application/json, User-Agent: Toast38coza (info@38.co.za)"
```

**Adds CORS:**

```
curl -X POST http://kong:8001/apis/cliniko/plugins \
    --data "name=cors" 
```

* replace `kong` with your appropriate API url, and replace any values with those relevant to your account.

## Other Resources: 

* Coverage reports can be found in `reports/coverage`
