- link to pipeline - https://dev.azure.com/mclm/Mayo%20Open%20Developer%20Network/_git/iac-tf-pipeline?path=/tf_plan_task.yml&version=GBmain&_a=contents


- available pipeline variable:
```yaml

      if [ "$DESTROY_ONLY" == 'true' ]; then
          echo "DESTROY_ONLY set to 'true'.  Creating destroy plan.  All current resources will be destroyed."
          terraform plan -destroy -input=false -var-file vars/$(SOURCE_BRANCH_NAME).tfvars \
              -detailed-exitcode \
              -out ${{ parameters.PLAN_FILE_NAME }}
          returnCode=$?
      elif [ ! -z "$TARGET_DESTROY" ]; then
          echo "Targetted Destroy requested for $TARGET_DESTROY.  Creating destroy plan"
          terraform plan -destroy -input=false -var-file vars/$(SOURCE_BRANCH_NAME).tfvars \
              -target="$TARGET_DESTROY" \
              -detailed-exitcode \
              -out ${{ parameters.PLAN_FILE_NAME }}
          returnCode=$?
      elif [ "$REFRESH_ONLY" == 'true' ]; then
          echo "Refresh only requested.  Creating refresh plan"
          terraform plan -refresh-only -input=false -var-file vars/$(SOURCE_BRANCH_NAME).tfvars \
              -detailed-exitcode \
              -out ${{ parameters.PLAN_FILE_NAME }}
          returnCode=$?
      else
          echo "Creating creation plan using $(SOURCE_BRANCH_NAME).tfvars"
          terraform plan -input=false -var-file vars/$(SOURCE_BRANCH_NAME).tfvars \
              -detailed-exitcode \
              -out ${{ parameters.PLAN_FILE_NAME }}
          returnCode=$?
      fi

```
