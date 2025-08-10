@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\BetterSurvivalBP"
xcopy /I /Q /s /e ".\BetterSurvivalBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\BetterSurvivalBP"

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\BetterSurvivalRP"
xcopy /I /Q /s /e ".\BetterSurvivalRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\BetterSurvivalRP"
