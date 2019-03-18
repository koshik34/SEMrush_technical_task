new Vue({
	el:'.container',
	data:{
		fields:[],
		data_fields:{
			selectType:{
				text:
				{
					label:'Text field',
				},
				number:
				{
					label:'Number field',
				}
			},
			selectOperation:{
				text:
				{	
					containing:{label:'Containing'},
					exactly_matching:{label:'Exactly matching'},
					begins_with:{label:'Begins with'},
					ends_with:{label:'Ends with'}
				},
				number:
				{
					equal:{label:'Equal'},
					greater_than:{label:'Greater than'},
					less_than:{label:'Less than'},
				}
			},
			default_text:'containing',
			default_number:'equal',
		},
	},
	computed:{

	},
	methods:{
		addField()
		{
			if(this.fields.length>=10)
				return;
			this.fields.push(
				{type:'text',operation:'containing',value:''});
		},
		resetToDefault(i,type)
		{
			this.fields[i].operation=this.data_fields['default_'+type];
			this.fields[i].value='';
		},
		removeField(i)
		{
			this.fields.splice(i,1);
		},
		resetFields()
		{
			this.fields=[{type:'text',operation:'containing',value:''}];
		},
		showResult()
		{
			var result={number:[],text:[]};
			this.fields.forEach(elem=>
			{
				result[elem.type].push({operation:elem.operation.replace('_',' '),value:elem.value});
			});
			console.log(result);
		}
	},
});