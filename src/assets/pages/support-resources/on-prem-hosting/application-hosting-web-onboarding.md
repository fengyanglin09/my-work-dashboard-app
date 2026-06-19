# Application Hosting Web Onboarding Info

## Deployment / Runtime Notes

## Environment Variables

In your build directory, where UCD builds the new container image, there is a `setenv.sh` that configures Catalina. It creates a variable called `TOMCATENV` that is set for `DEV`, `INT`, and `PROD`.

## Context File

You should be able to configure your context file to be deployed in your ADO project, and UCD will copy it into your build directory. This can also be done manually through a ticket, but using ADO to deploy it is more convenient.

## Variable Changes

For the environments that are already set, that is what is put into the running container. Changes most likely will not be allowed, but discussions can be had if needed.

## Log Management

Logs are found in the shared folder:

```text
\\mfad\rchweb\reap\Tomcat\dlm\dlm_rtuse
```

As you push to `INT` and `PROD`, you will see `int` and `prod` folders.

There is a `JournalD -> Filebeat -> Logstash` pipeline configured to read all systemout from your container and dump it to that folder.

## Cleanup

Cleanup of the logs in the share is up to you. I would not recommend deleting logs, as they can always be referenced for troubleshooting.

When you enable debug logs, it can potentially fill up the host's logging folder. Enable debug log levels only as needed, then disable them to prevent resource exhaustion for your running container.
