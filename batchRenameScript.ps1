$root = 'D:\[PROJECTs]\documentry-the-journey'

$orderedNames = @(
    "Video Game Button",
    "React Study Buddy",
    "RPG Character Creator",
    "World's Most Annoying Form",
    "The Legend of Scrimba",
    "Math-o-Matic Quiz Generator",
    "Simple Food Restaurant",
    "Haunted House Real Estate",
    "Original Calculator",
    "Top 100 Colors",
    "Enemies in the Castle",
    "Word Power",
    "Million Dollar Bank Account",
    "Save the Dashboard",
    "Stock Tracker",
    "Weird Wikipedia Articles",
    "Fire Starter",
    "Mood Tracker",
    "AutoComplete",
    "Anti-Motivational Quote App",
    "Frontend Birthday Cards",
    "File Uploader",
    "Photo Editor",
    "Spam Newsletter",
    "Weather App",
    "Read-Me-Later",
    "Finger Strength Test",
    "Boredom Blaster 3000",
    "Sonnet Central",
    "Virtual Reality Site Enter Button",
    "Emoji Personality Test",
    "Employee Spying Program",
    "ScrimbaFest",
    "Legit File Sharing Site Download Button",
    "Broken Clock",
    "Sketch-o-Matic",
    "Debatable",
    "Pookemon",
    "Scrimbatronic",
    "Space Warrior"
)

$folders = Get-ChildItem -LiteralPath $root -Directory

foreach ($folder in $folders) {
    $currentName = $folder.Name

    $baseName = $currentName -replace '\s*Challenge\s*$', ''
    $baseName = $baseName.Trim()

    $index = -1
    for ($i = 0; $i -lt $orderedNames.Count; $i++) {
        if ($orderedNames[$i].ToLower() -eq $baseName.ToLower()) {
            $index = $i + 1
            break
        }
    }

    if ($index -eq -1) {
        Write-Output "NOT MATCHED: $currentName"
        continue
    }

    $paddedIndex = $index.ToString("D2")
    $hyphenated  = $baseName -replace ' ', '-'
    $newName     = "${paddedIndex}_${hyphenated}"

    if ($newName -ne $currentName) {
        $newPath = Join-Path $root $newName
        if (-not (Test-Path -LiteralPath $newPath)) {
            Rename-Item -LiteralPath $folder.FullName -NewName $newName -ErrorAction Stop
            Write-Output "Renamed: $currentName --> $newName"
        } else {
            Write-Output "Skipped (already exists): $newName"
        }
    } else {
        Write-Output "Already correct: $currentName"
    }
}

Write-Output "Done!"