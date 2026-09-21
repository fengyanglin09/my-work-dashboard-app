# Story Management Guide

## Purpose

Use this guide to keep stories and tasks current on the sprint board, support accurate burndown tracking, and make the handoff to QA clear.

## Story Lifecycle

```text
New -> Active -> Testing
```

Individual tasks within the story move through:

```text
New -> Active -> Closed
```

## Steps for Managing a Story

### 1. Select and claim a story

- Choose an available story based on priority and team guidance.
- Assign the story to yourself before beginning work.
- Do not start an unassigned story, because another developer may begin working on it at the same time.

### 2. Start the story

- Change the story status from **New** to **Active**.
- Save the change.
- Move only the task you are currently working on from **New** to **Active**.

### 3. Track remaining work

- Each task begins with an estimated number of remaining hours.
- Update the remaining hours as work progresses.
- Enter the hours still needed, not the hours already spent.

**Example:** If a task starts with 5 hours and you estimate 3 hours remain at the end of the day, update the task to **3 remaining hours**.

### 4. Close completed tasks

- When a task is finished, move it from **Active** to **Closed**.
- You do not need to manually change its remaining hours to zero. Moving it to **Closed** does that.
- Start the next task by moving only that task to **Active**.

### 5. Keep the board current

Update the story, task states, and remaining hours regularly. This helps:

- Keep the sprint burndown chart accurate.
- Show the team how much work remains.
- Let QA know which stories are approaching testing.
- Help teammates identify when assistance may be needed.
- Give someone taking over a story a clearer picture of its current state.

### 6. Complete development and hand off to QA

After development is complete and the pull request is integrated:

1. Confirm the development tasks are **Closed**.
2. Assign the story to **Prachi**.
3. Keep the main story active while making the QA handoff.
4. Change the story's workflow status to **Testing** using the status field under the assignee.
5. QA will continue the story through the testing process and may contact you if a change or clarification is needed.

## Quick Daily Checklist

### When starting work

- [ ] The story is assigned to me.
- [ ] The story is **Active**.
- [ ] Only the task I am currently working on is **Active**.

### While working

- [ ] Remaining hours reflect my current estimate.
- [ ] Completed tasks are moved to **Closed**.
- [ ] The sprint board reflects the actual state of the work.

### When development is complete

- [ ] All development tasks are **Closed**.
- [ ] The pull request is complete and integrated.
- [ ] The story is assigned to **Prachi**.
- [ ] The workflow status is set to **Testing**.

## Important Reminders

- Claim a story before starting it to prevent duplicate work.
- Update **remaining hours**, not hours spent.
- Closing a task automatically reduces its remaining work to zero.
- Do not move every task to **Active** at once. Activate only the task currently in progress.
- Update the separate workflow status to **Testing** when assigning the story to QA.
- If you are unsure which story to take next, coordinate with the appropriate team member before starting.

## One-Line Workflow

> Assign the story to yourself, move the story and current task to **Active**, update remaining hours, close each completed task, then assign the integrated story to **Prachi** and set it to **Testing**.

---

**Source:** Story management discussion from the Teams meeting held on September 21, 2026. This guide captures the process explained during the meeting and is intended as a practical personal reference.
