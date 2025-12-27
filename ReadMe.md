DEMO WEBSITE USED: https://todomvc.com/examples/react/dist/
AUTOMATED: Create/Update/Delete of Tasks.

Checklist:
Node Js/NPM Installed : node/npm -v/--version

Tips:
1)npm init -y (will create package.json file for U, -y will remove follow ups,recommneded to run in cmd terminal instead of powershell)
2)npm init playwright@latest (will download, playwright dependencies)
3) npx playwright codegen , for quick  code generations
4) to run specific test with tag, npx playwright test --headed @sanity --project=chromium/npx playwright test --grep "@sanity" --project=chromium --headed
5)npx playwright test --list, will give list of all tests
6) npx playwright test -ui, gives live debugging of the run, ms wise
7) In Playwright config file, under use add (headless,browsermode,screenshot,video for project level configuration)
8)npx playwright test --debug