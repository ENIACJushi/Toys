@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\MoreOresBP"
xcopy /I /Q /s /e ".\MoreOresBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\MoreOresBP"

@REM rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\MoreOresRP"
@REM xcopy /I /Q /s /e ".\MoreOresRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\MoreOresRP"
