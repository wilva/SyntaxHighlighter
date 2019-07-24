/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'a abort abort_transation abs address addressof an and attach begin begin_transaction bigint boolean break ' +
				'broadcast broadcast_focus byref call_driver case cd_end_object cd_popup_object chain char class clear ' +
				'close close_input close_output cmdline constrain copy_db copy_records create_field create_index currency ' +
				'current_object date datetime decimal declare_datefile decrement deferred_view define delegate delete ' +
				'delete_db delete_field delete_index direct_input direct_output diskfree dword else end end_class ' +
				'end_enum_list end_function end_object end_procedure end_transation end_type entry_item enum_list ' +
				'erase_file error external_function false field field_map file_exist fill_field find float for forward ' +
				'from function function_return get getaddress get_argument_size get_attribute get_current_directory ' +
				'get_directory get_date_attribute get_environment get_fieldnumber get_field_value get_file_mod_time ' +
				'get_filenumber get_file_path get_windows_directory global global_variable goto handle if ' +
				'import_class_protocol in increment integer is item load_def load_driver lock login logout loop ' +
				'make_directory make_file move not number object of on_key open output_aux_file pointer ' +
				'procedure procedure_return property read readln read_block read_hex register_function register_object ' +
				'register_procedure relate remove_directory renamefile repeat reread returns runprogram save saverecord ' +
				'self send set set_argument_size set_attribute set_field_value set_file_mod_time set_relate short ' +
				'show showln sleep sort start_ui string structure_abort structure_copy structure_end structure_start ' +
				'subtract sysdate then time timespan to true type ubigint uchar uinteger unload_driver until unlock ' +
				'use ushort valid_drive variant vconstrain vfind while winput ' +
				'word write writeln xor zerofile zerostring';

		this.regexList = [
			{ regex: /\(\*[\s\S]*?\*\)/gm,					css: 'comments' },  	// multiline comments (* *)
			{ regex: /{(?!\$)[\s\S]*?}/gm,					css: 'preprocessor' },  // { }
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },  	// one line
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// strings
			{ regex: /\{\$[a-zA-Z]+ .+\}/g,					css: 'color1' },	// compiler Directives and Region tags
			{ regex: /\b[\d\.]+\b/g,					css: 'value' },		// numbers 12345
			{ regex: /\$[a-zA-Z0-9]+\b/g,					css: 'value' },		// numbers $F5D3
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }	// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['dataflex', 'vdf', 'df'];

	SyntaxHighlighter.brushes.Dataflex = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
