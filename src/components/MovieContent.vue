<template>
<div>
<el-row>
    <el-col :span="8" class="grid-content bg-purple"><img width="200px" src="http://img.appledaily.com.tw/images/ReNews/20170401/640_2ac09b73d6d9f68d4a7db4bf995f4709.jpg"></el-col>
    <el-col :span="16" class="grid-content bg-purple">
        <ul>
            <li>中文電影名稱</li>
            <li>英文電影名稱</li>
            <li>上映日期</li>
            <li>發行國家</li>
        </ul>
    </el-col>
</el-row>
<el-row>
    <el-col :span="8">IMDB評分：</el-col>
    <el-col :span="8">爛番茄評分：</el-col>
    <el-col :span="8">MORANK評分：</el-col>
</el-row>
<el-row>
    <el-tabs>
        <el-tab-pane>
            <span slot="label">電影介紹</span>
            電影介紹
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label">預告片</span>
            預告片
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label">網友短評</span>
            網友短評
        </el-tab-pane>
    </el-tabs>
</el-row>

</div>
</template>

<script>
</script>