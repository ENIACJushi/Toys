@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\ChatSoundsBP"
xcopy /I /Q /s /e ".\ChatSoundsBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\ChatSoundsBP"

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\ChatSoundsRP"
xcopy /I /Q /s /e ".\ChatSoundsRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\ChatSoundsRP"
