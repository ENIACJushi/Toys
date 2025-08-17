@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\AnvilRainBP"
xcopy /I /Q /s /e ".\AnvilRainBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\AnvilRainBP"

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\AnvilRainRP"
xcopy /I /Q /s /e ".\AnvilRainRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\AnvilRainRP"
