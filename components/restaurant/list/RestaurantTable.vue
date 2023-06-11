<script setup lang="ts">

import Table from "~/components/UI/table/Table.vue";
import Tr from "~/components/UI/table/Tr.vue";
import Th from "~/components/UI/table/Th.vue";
</script>

<template>
	<Table>
	  <template #head>
			<Tr>
			  <Th>{{$t('Name')}}</Th>
			  <Th>{{$t('Address')}}</Th>
			  <Th>{{$t('Status')}}</Th>
			  <Th>{{$t('Created At')}}</Th>
			</Tr>
	  </template>
	  
	  <template #body>
		<RestaurantTableItem />
		<RestaurantTableItem />
		<RestaurantTableItem />
		<RestaurantTableItem />
	  </template>
	  
	</Table>
</template>

<style scoped lang="scss">

</style>