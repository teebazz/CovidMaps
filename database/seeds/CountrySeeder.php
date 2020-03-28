<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->truncate();
        DB::table('countries')->insert([
            'name' => 'Nigeria',
            'longitude' => '9.0820',
            'latitude' => '8.6753',
            'boundary' => 'https://raw.githubusercontent.com/davetaz/nigeria-map/gh-pages/data/processed/nigeria_regions.json',
        ]);
    }
}
