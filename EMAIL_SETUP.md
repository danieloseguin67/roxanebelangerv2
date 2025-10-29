# Email Notification Setup Instructions

The GitHub Pages deployment workflow now includes email notifications that will be sent to `danieloseguin67@gmail.com` when deployment is successful.

## Required Configuration

To enable email notifications, you need to add two secrets to your GitHub repository:

### 1. Create a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords: https://myaccount.google.com/apppasswords
5. Select "Mail" and "Other (Custom name)"
6. Enter a name like "GitHub Actions"
7. Click "Generate"
8. Copy the 16-character password (this will only be shown once)

### 2. Add Secrets to GitHub Repository

1. Go to your repository on GitHub: https://github.com/danieloseguin67/roxanebelangerv2
2. Click on "Settings" tab
3. In the left sidebar, click "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Add two secrets:

   **Secret 1:**
   - Name: `MAIL_USERNAME`
   - Value: Your full Gmail address (e.g., danieloseguin67@gmail.com)

   **Secret 2:**
   - Name: `MAIL_PASSWORD`
   - Value: The 16-character app password you generated above

### 3. Test the Workflow

Once the secrets are configured, the next deployment to the `main` branch will trigger an email notification upon successful completion.

## What You'll Receive

When a deployment succeeds, you'll receive an email with:
- Repository name
- Branch name
- Commit SHA
- Workflow run link
- Direct link to your deployed website

## Troubleshooting

If you don't receive emails:
1. Verify both secrets are correctly set in GitHub repository settings
2. Check the GitHub Actions workflow run logs for any email sending errors
3. Check your Gmail spam folder
4. Ensure 2-Step Verification is enabled on your Google Account
5. Make sure you're using an App Password, not your regular Gmail password
