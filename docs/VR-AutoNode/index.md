---
layoutClass: doc
---

<script setup>
import MNavLinks from '../components/MNavLinks.vue'

import { NAV_DATA } from '../VR-AutoNode-data'
</script>

# <span class="h1-icon"><img src="/img/VR-AutoPBR.webp" alt="Custom Icon"></span>VR-AutoNode v2.0
## 说明
VR-AutoNode是V-Ray的节点辅助工具，可以自动连接PBR贴图，自动批量添加置换贴图，自动插入常用节点，自动连接指定通道，自动添加PSR控制，批量添加TriPlanar节点，一键处理重复贴图，自动设置UDIM，自动切换颜色模式（Linear/ACES），等等……
<br />
<br />
- 支持版本：`Cinema 4D 2023~2024`
- 插件下载地址（付费）：https://cgexe.com/56785/
- 插件需要登录后才能使用：[登录说明](01-VAN-setting)
- 首次使用先需要导入插件`assets`文件夹的`AutoNode.zip`节点资产：[导入教程](01-VAN-import_assets)


<br />

## 功能介绍
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>


<br />

## 更新说明

::: info VR-AutoNode v2.0 <Badge type="danger" text="更新10+" />
1. 新增自定义菜单功能，支持自定义添加常用节点和命令
2. 重新优化自动PBR的连接逻辑
3. 新增支持多材质节点自动连接PBR
4. 修复自动连接PBR中AO贴图颜色模式的设置问题
5. 新增自动连接PBR后自动添加调节节点
6. 新增自动连接PBR后根据文件名重命名材质
7. 新增多贴节点连接根据文件名排序
8. 重新优化插入节点的方式
9. 新增批量自动连接Layered和MultiSubTex节点
10. 新增TP PBR弹出菜单

:::


::: details VR-AutoNode 1.01<Badge type="info" text="更新1" />
1. 修复To PBR（PBR连接）无后缀贴图的bug

:::

::: details VR-AutoNode v1.0<Badge type="info" text="发布" />
1. OC-MatTool_v1.0发布

:::


<br />
<br />

## ☠使用注意

新版Node节点生成预览的时候都会造成CPU或者GPU瞬间占用很高，Vray是用CPU生成预览，Redshift是用GPU生成预览。  
Vray在连接节点之后会计算节点产生的预览效果。这个过程CPU中使用率会**瞬间变高🔥**（生成预览之后会降低），特别是同时连接多个贴图的时候CPU的使用率会突然飙升。
> 这和插件无关，就算不用插件，这个问题也是存在的


<br />

::: danger 个人建议
所以如果当你场景比较大或者有大量的节点的时候，建议把节点预览**关闭**。
:::

<br />

可以在设置（Ctrl+E）> 渲染器 > Vary > Materials，**关闭**节点预览。 
<br />  
关闭材质预览之后，连接贴图会快很多，而且也不会占用额外的资源。缺点就是材质没有预览，都是黑色的，所以必须归类命名好😂

<br />

<img data-zoomable src="/img/vr-autonode_close_node_preview.webp" alt="插件设置" width=50%>

