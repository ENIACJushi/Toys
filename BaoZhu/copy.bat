@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\BaoZhuBP"
xcopy /I /Q /s /e ".\BaoZhuBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\BaoZhuBP"

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\BaoZhuRP"
xcopy /I /Q /s /e ".\BaoZhuRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\BaoZhuRP"
