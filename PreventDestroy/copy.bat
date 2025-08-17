@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\PreventDestroyBP"
xcopy /I /Q /s /e ".\PreventDestroyBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\PreventDestroyBP"

@REM rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\PreventDestroyRP"
@REM xcopy /I /Q /s /e ".\PreventDestroyRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\PreventDestroyRP"
