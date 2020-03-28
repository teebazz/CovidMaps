<?php

use Illuminate\Database\Seeder;

class CasesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cases')->delete();
        
        \DB::table('cases')->insert(array (
            0 => 
            array (
                'id' => 1,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 28,
                'created_at' => '2020-02-29 00:00:00',
                'updated_at' => '2020-03-28 06:17:39',
            ),
            1 => 
            array (
                'id' => 2,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 28,
                'created_at' => '2020-03-08 00:00:00',
                'updated_at' => '2020-03-28 06:20:58',
            ),
            2 => 
            array (
                'id' => 3,
                'number' => '1',
                'type' => 'contact',
                'status' => 'recovered',
                'state_id' => 28,
                'created_at' => '2020-03-13 00:00:00',
                'updated_at' => '2020-03-28 06:23:07',
            ),
            3 => 
            array (
                'id' => 4,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-17 00:00:00',
                'updated_at' => '2020-03-28 06:26:11',
            ),
            4 => 
            array (
                'id' => 5,
                'number' => '4',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-18 00:00:00',
                'updated_at' => '2020-03-28 06:29:49',
            ),
            5 => 
            array (
                'id' => 6,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 13,
                'created_at' => '2020-03-18 00:00:00',
                'updated_at' => '2020-03-28 06:29:49',
            ),
            6 => 
            array (
                'id' => 7,
                'number' => '4',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-19 00:00:00',
                'updated_at' => '2020-03-28 06:35:00',
            ),
            7 => 
            array (
                'id' => 8,
                'number' => '6',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-21 00:00:00',
                'updated_at' => '2020-03-28 06:37:53',
            ),
            8 => 
            array (
                'id' => 9,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-21 00:00:00',
                'updated_at' => '2020-03-28 06:38:12',
            ),
            9 => 
            array (
                'id' => 10,
                'number' => '3',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-21 00:00:00',
                'updated_at' => '2020-03-28 06:38:26',
            ),
            10 => 
            array (
                'id' => 11,
                'number' => '3',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:39:46',
            ),
            11 => 
            array (
                'id' => 12,
                'number' => '1',
                'type' => 'index',
                'status' => 'recovered',
                'state_id' => 25,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:40:01',
            ),
            12 => 
            array (
                'id' => 13,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 31,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:41:20',
            ),
            13 => 
            array (
                'id' => 14,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:42:19',
            ),
            14 => 
            array (
                'id' => 15,
                'number' => '2',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:43:01',
            ),
            15 => 
            array (
                'id' => 16,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-22 00:00:00',
                'updated_at' => '2020-03-28 06:43:14',
            ),
            16 => 
            array (
                'id' => 17,
                'number' => '2',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:45:15',
            ),
            17 => 
            array (
                'id' => 18,
                'number' => '2',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:45:29',
            ),
            18 => 
            array (
                'id' => 19,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 12,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:45:44',
            ),
            19 => 
            array (
                'id' => 20,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:47:10',
            ),
            20 => 
            array (
                'id' => 21,
                'number' => '1',
                'type' => 'index',
                'status' => 'death',
                'state_id' => 25,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:47:37',
            ),
            21 => 
            array (
                'id' => 22,
                'number' => '2',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:51:48',
            ),
            22 => 
            array (
                'id' => 23,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:52:28',
            ),
            23 => 
            array (
                'id' => 24,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-23 00:00:00',
                'updated_at' => '2020-03-28 06:53:00',
            ),
            24 => 
            array (
                'id' => 25,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-24 00:00:00',
                'updated_at' => '2020-03-28 06:54:08',
            ),
            25 => 
            array (
                'id' => 26,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 28,
                'created_at' => '2020-03-24 00:00:00',
                'updated_at' => '2020-03-28 06:54:29',
            ),
            26 => 
            array (
                'id' => 27,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 5,
                'created_at' => '2020-03-24 00:00:00',
                'updated_at' => '2020-03-28 06:55:26',
            ),
            27 => 
            array (
                'id' => 28,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-24 00:00:00',
                'updated_at' => '2020-03-28 06:55:42',
            ),
            28 => 
            array (
                'id' => 29,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-25 00:00:00',
                'updated_at' => '2020-03-28 06:56:08',
            ),
            29 => 
            array (
                'id' => 30,
                'number' => '1',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 30,
                'created_at' => '2020-03-25 00:00:00',
                'updated_at' => '2020-03-28 06:56:20',
            ),
            30 => 
            array (
                'id' => 31,
                'number' => '2',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-25 00:00:00',
                'updated_at' => '2020-03-28 06:56:55',
            ),
            31 => 
            array (
                'id' => 32,
                'number' => '2',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-25 00:00:00',
                'updated_at' => '2020-03-28 06:57:45',
            ),
            32 => 
            array (
                'id' => 33,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 33,
                'created_at' => '2020-03-25 00:00:00',
                'updated_at' => '2020-03-28 06:57:55',
            ),
            33 => 
            array (
                'id' => 34,
                'number' => '3',
                'type' => 'index',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 06:59:33',
            ),
            34 => 
            array (
                'id' => 35,
                'number' => '1',
                'type' => 'contact',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 06:59:46',
            ),
            35 => 
            array (
                'id' => 36,
                'number' => '8',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 06:59:59',
            ),
            36 => 
            array (
                'id' => 37,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 07:00:13',
            ),
            37 => 
            array (
                'id' => 38,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 5,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 07:00:13',
            ),
            38 => 
            array (
                'id' => 39,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'recovered',
                'state_id' => 25,
                'created_at' => '2020-03-26 00:00:00',
                'updated_at' => '2020-03-28 07:03:08',
            ),
            39 => 
            array (
                'id' => 40,
                'number' => '3',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 15,
                'created_at' => '2020-03-27 00:00:00',
                'updated_at' => '2020-03-28 07:04:37',
            ),
            40 => 
            array (
                'id' => 41,
                'number' => '2',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 31,
                'created_at' => '2020-03-27 00:00:00',
                'updated_at' => '2020-03-28 07:04:47',
            ),
            41 => 
            array (
                'id' => 42,
                'number' => '8',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-27 00:00:00',
                'updated_at' => '2020-03-28 07:06:17',
            ),
            42 => 
            array (
                'id' => 43,
                'number' => '2',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 14,
                'created_at' => '2020-03-27 00:00:00',
                'updated_at' => '2020-03-28 07:06:45',
            ),
            43 => 
            array (
                'id' => 44,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 12,
                'created_at' => '2020-03-27 00:00:00',
                'updated_at' => '2020-03-28 07:07:04',
            ),
            44 => 
            array (
                'id' => 45,
                'number' => '7',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 25,
                'created_at' => '2020-03-28 00:00:00',
                'updated_at' => '2020-03-28 15:16:11',
            ),
            45 => 
            array (
                'id' => 46,
                'number' => '1',
                'type' => 'unknown',
                'status' => 'active',
                'state_id' => 7,
                'created_at' => '2020-03-28 00:00:00',
                'updated_at' => '2020-03-28 15:16:25',
            ),
        ));
        
        
    }
}