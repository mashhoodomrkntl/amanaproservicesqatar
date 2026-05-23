$srcPath = "d:\WebDevelopement_for_clients\AmanahProServicesQatar\src"

# Replacements: Old -> New
$replacements = @{
    '#0A2647' = '#003366'
    '#001a3f' = '#002244'
    '#003380' = '#004488'
    'rgba(197,160,89,' = 'rgba(204,153,51,'
    'rgba(0,26,63,' = 'rgba(0,34,68,'
}

Get-ChildItem -Path $srcPath -Recurse -Include '*.tsx','*.ts' | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $modified = $false
    
    foreach ($old in $replacements.Keys) {
        if ($content -match [regex]::Escape($old)) {
            $content = $content -replace [regex]::Escape($old), $replacements[$old]
            $modified = $true
        }
    }
    
    if ($modified) {
        Set-Content -Path $_.FullName -Value $content -NoNewline
        Write-Host "Updated: $($_.Name)"
    }
}

Write-Host "Done!"
