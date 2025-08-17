@echo off
@REM MinecraftPath: C:\Users\XXX\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\SuperVillagerBP"
xcopy /I /Q /s /e ".\SuperVillagerBP" "%MinecraftPath%\LocalState\games\com.mojang\development_behavior_packs\SuperVillagerBP"

rmdir /s /q "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\SuperVillagerRP"
xcopy /I /Q /s /e ".\SuperVillagerRP" "%MinecraftPath%\LocalState\games\com.mojang\development_resource_packs\SuperVillagerRP"
