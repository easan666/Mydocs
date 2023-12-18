---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../RS-NodeTool-data'
</script>

# <span class="h1-icon"><img src="/img/OC-AutoPBR.webp" alt="Custom Icon"></span>OC-MatTool v1.0
## 说明
OC-MatTool是Octane材质辅助工具 一键连接PBR贴图，批量添加chaos节点，一键处理重复贴图，批量添加调节节点，批量添加UV节点，批量添加TriPlanar节点，自动设置ID，自动添加Layer /Custom AOV等等……
<br />
<br />
- 支持版本：`Cinema 4D R23~2024`
- 插件下载地址（付费）：https://cgexe.com/57283/
- 插件需要登录后才能使用：[登录说明](01-OMT-setting)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>




<br />
<br />

## ☠使用注意
由于Octane并没有开放节点的api，所以插件并不是对Octane节点的控制，而是对材质的设置。  
这样就有一些局限性，也无法对节点进行一些精细化的操作  
> 节点连接之后会重叠，需要手动整理。

<br />

<video controls autoplay muted>
  <source src="/img/oc-mattool-autopbr-addadjust-02.webm" type="video/webm">
</video>

