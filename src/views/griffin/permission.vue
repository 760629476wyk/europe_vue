<template>
	<el-table
			:data="tableData"
			style="width: 100%; margin-top: 10px;">
		<el-table-column
				label="姓名"
				width="180">
			<template slot-scope="scope">
				{{ scope.row.name }}
			</template>
		</el-table-column>
		<el-table-column label="大数据平台(grassland)">
			<template slot-scope="scope">
				<el-checkbox v-model="scope.row.checked1" disabled>管理员</el-checkbox>
				<el-checkbox v-model="scope.row.checked2" disabled>用户</el-checkbox>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    name: 'demo03',
                    checked1: false,
                    checked2: true
                }, {
                    name: 'demo02',
                    checked1: false,
                    checked2: true
                }, {
                    name: 'demo01',
                    checked1: false,
                    checked2: true
                }, {
                    name: 'admin',
                    checked1: true,
                    checked2: true
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>