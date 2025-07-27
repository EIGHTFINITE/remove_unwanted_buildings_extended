(function(){
	var companies = ['company_misr',
	'company_egyptian_rail',
	'company_suez_company',
	'company_fundidora_monterrey',
	'company_el_aguila',
	'company_csfa',
	'company_caribbean_petroleum',
	'company_bunge_born',
	'company_la_rosada',
	'company_famae',
	'company_peruvian_amazon',
	'company_kablin',
	'company_hbc',
	'company_panama_company',
	'company_east_india_company',
	'company_imperial_arsenal',
	'company_ottoman_tobacco_regie',
	'company_allatini_mills',
	'company_orient_express',
	'company_great_indian_railway',
	'company_tata',
	'company_sunhwaguk',
	'company_nam_dinh',
	'company_imperial_tobacco',
	'company_san_miguel',
	'company_william_sandford',
	'company_b_grimm',
	'company_skoda',
	'company_mav',
	'company_manfred_weiss',
	'company_galician_carpathian_oil',
	'company_oevg',
	'company_kaiping_mining',
	'company_hanyang_arsenal',
	'company_foochow_arsenal',
	'company_jingdezhen',
	'company_sao_paulo_railway',
	'company_estaleiro_maua',
	'company_pernambuco_textiles',
	'company_fundicao_ipanema',
	'company_rossi',
	'company_estanifera_llallagua',
	'company_argentinian_wine',
	'company_sudamericana_de_vapores',
	'company_electricidad_de_caracas',
	'company_cordoba_railway',
	'company_eea',
	'company_ccci',
	'company_franco_belge',
	'company_john_cockerill',
	'company_nederlandse_petroleum',
	'company_philips',
	'company_basileiades',
	'company_kouppas',
	'company_ericsson',
	'company_lkab',
	'company_gotaverken',
	'company_aker_mek',
	'company_nokia',
	'company_ursus',
	'company_lilpop',
	'company_mozambique_company',
	'company_altos_hornos_de_vizcaya',
	'company_duro_y_compania',
	'company_espana_industrial',
	'company_trubia',
	'company_zastava',
	'company_chr_hansens',
	'company_ap_moller',
	'company_cfr',
	'company_romanian_star',
	'company_societe_mokta_el_hadid',
	'company_schneider_creusot',
	'company_dmc',
	'company_cgv',
	'company_saint_etienne',
	'company_fcm',
	'company_mines_anzin',
	'company_krupp',
	'company_rheinmetall',
	'company_schichau',
	'company_siemens_and_halske',
	'company_prussian_state_railways',
	'company_basf',
	'company_j_p_coats',
	'company_armstrong_whitworth',
	'company_john_brown',
	'company_gwr',
	'company_bolckow_vaughan',
	'company_bengal_coal_company',
	'company_bombay_dyeing_company',
	'company_david_sassoon',
	'company_bombay_burmah_trading_corporation',
	'company_madura_mills',
	'company_assam_company',
	'company_wadia_shipbuilders',
	'company_steel_brothers',
	'company_ralli_brothers',
	'company_calcutta_electric',
	'company_ilva',
	'company_ansaldo',
	'company_ricordi',
	'company_fiat',
	'company_stt',
	'company_mitsui',
	'company_mantetsu',
	'company_mitsubishi',
	'company_ludwig_moser_and_sons',
	'company_compania_sansinena_de_carnes_congeladas',
	'company_konigliche_porzellan_manufaktur_meissen',
	'company_jiangnan_weaving_bureaus',
	'company_russian_american_company',
	'company_maison_worth',
	'company_lee_wilson',
	'company_colt_firearms',
	'company_gebruder_thonet',
	'company_kinkozan_sobei',
	'company_maple_and_co',
	'company_ong_lung_sheng_tea_company',
	'company_anglo_sicilian_sulphur_company',
	'company_mantero_seta',
	'company_norsk_hydro',
	'company_massey_harris',
	'company_de_beers',
	'company_john_holt',
	'company_imperial_ethiopian_railways',
	'company_lanfang_kongsi',
	'company_paradox',
	'company_vodka_monopoly',
	'company_putilov_company',
	'company_branobel',
	'company_izhevsk_arms_plant',
	'company_savva_morozov',
	'company_john_hughes',
	'company_da_afghan_nassaji_sherkat',
	'company_iranian_state_railway',
	'company_tashkent_railroad',
	'company_west_ural_petroleum',
	'company_sherkat_shemali',
	'company_opium_export_monopoly',
	'company_sherkate_eslamiya',
	'company_nicolas_portalis',
	'company_hanseong_jeongi_hoesa',
	'company_kirgizian_mining_company',
	'company_persshelk',
	'company_perskhlopok',
	'company_moscow_irrigation_company',
	'company_guinness',
	'company_oriental_development_company',
	'company_turkish_petroleum',
	'company_anglo_persian_oil',
	'company_national_iranian_oil',
	'company_standard_oil',
	'company_united_fruit',
	'company_us_steel',
	'company_general_electric',
	'company_william_cramp',
	'company_ford_motor',
	'company_basic_agriculture_1',
	'company_basic_agriculture_2',
	'company_basic_fabrics',
	'company_basic_colonial_plantations_1',
	'company_basic_colonial_plantations_2',
	'company_basic_silk_and_dye',
	'company_basic_wine_and_fruit',
	'company_basic_fishing',
	'company_basic_forestry',
	'company_basic_oil',
	'company_basic_gold_mining',
	'company_basic_metal_mining',
	'company_basic_mineral_mining',
	'company_basic_food',
	'company_basic_paper',
	'company_basic_home_goods',
	'company_basic_textiles',
	'company_basic_steel',
	'company_basic_metalworks',
	'company_basic_shipyards',
	'company_basic_chemicals',
	'company_basic_motors',
	'company_basic_munitions',
	'company_basic_electrics',
	'company_basic_weapons',
	'company_construction_power_bloc'];

	var string = 'zw_remove_building_company_regional_headquarter_decision = {\n';
	string += '	is_shown = {\n';
	string += '		is_player = yes\n';
	string += '		any_scope_state = {\n';
	string += '			has_decree = decree_zw_remove_buildings\n';
	string += '			OR = {\n';
	string += '				has_building = building_company_regional_headquarter\n';
	for (var i = 0; i < companies.length; i++) {
		string += '				has_building = building_regional_'+companies[i]+'\n';
	}
	string += '			}\n';
	string += '		}\n';
	string += '	}\n';
	string += '\n';
	string += '	when_taken = {\n';
	string += '		every_scope_state = {\n';
	string += '			limit = {\n';
	string += '				has_decree = decree_zw_remove_buildings\n';
	string += '				OR = {\n';
	string += '					has_building = building_company_regional_headquarter\n';
	for (var i = 0; i < companies.length; i++) {
		string += '					has_building = building_regional_'+companies[i]+'\n';
	}
	string += '				}\n';
	string += '			}\n';
	string += '			if = {\n';
	string += '				limit = {\n';
	string += '					has_building = building_company_regional_headquarter\n';
	string += '				}\n';
	string += '				remove_building = building_company_regional_headquarter\n';
	string += '			}\n';
	for (var i = 0; i < companies.length; i++) {
		string += '			if = {\n';
		string += '				limit = {\n';
		string += '					has_building = building_regional_'+companies[i]+'\n';
		string += '				}\n';
		string += '				remove_building = building_regional_'+companies[i]+'\n';
		string += '			}\n';
	}
	string += '		}\n';
	string += '	}\n';
	string += '}\n';

	console.log(string);
})();
