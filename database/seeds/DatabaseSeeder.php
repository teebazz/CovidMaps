<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountrySeeder::class);
        $this->call(StatesTableSeeder::class);
        $this->call(CasesTableSeeder::class);
    }
}
