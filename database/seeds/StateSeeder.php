<?php

use Illuminate\Database\Seeder;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->truncate();
        $states = array(
            [
                'name' => 'Abia', 
                'longitude' => '5.4527',
                'latitude' => '7.5248',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-201815.270995abia.jpg',
                'code' => 'AB',
            ],
            [
                'name' => 'Adamawa', 
                'longitude' => '9.3265',
                'latitude' => '12.3984',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-201836.984376adamawa.png',
                'code' => 'AD',
            ],
            [
                'name' => 'Akwa Ibom', 
                'longitude' => '4.9057',
                'latitude' => '7.8537',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-201906.150342akwa-ibom.png',
                'code' => 'AK',
            ],
            [
                'name' => 'Anambra', 
                'longitude' => '6.2209',
                'latitude' => '6.9370',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-201925.669234anambra.jpg',
                'code' => 'AN',
            ],
            [
                'name' => 'Bauchi', 
                'longitude' => '10.3010',
                'latitude' => '9.8237',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-201948.062480bauchi.png',
                'code' => 'BA',
            ],
            [
                'name' => 'Bayelsa', 
                'longitude' => '4.7719',
                'latitude' => '6.0699',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202007.838236bayelsa.jpg',
                'code' => 'BY',
            ],
            [
                'name' => 'Benue', 
                'longitude' => '7.3369',
                'latitude' => '8.7404',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202027.053491benue.jpg',
                'code' => 'BE',
            ],
            [
                'name' => 'Borno', 
                'longitude' => '11.8846',
                'latitude' => '13.1520',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202048.144550borno.gif',
                'code' => 'BR',
            ],
            [
                'name' => 'Cross River', 
                'longitude' => '5.8702',
                'latitude' => '8.5988',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202105.760591cross-river.jpg',
                'code' => 'CR',
            ],
            [
                'name' => 'Delta', 
                'longitude' => '5.7040',
                'latitude' => '5.9339',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202125.012506delta.jpg',
                'code' => 'DE',
            ],
            [
                'name' => 'Ebonyi', 
                'longitude' => '6.2649',
                'latitude' => '8.0137',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202146.414287ebonyi.png',
                'code' => 'EB',
            ],
            [
                'name' => 'Edo', 
                'longitude' => '6.6342',
                'latitude' => '5.9304',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202205.102453edo.jpg',
                'code' => 'ED',
            ],
            [
                'name' => 'Ekiti', 
                'longitude' => '7.7190',
                'latitude' => '5.3110',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202232.890403ekiti.jpg',
                'code' => 'EK',
            ],
            [
                'name' => 'Enugu', 
                'longitude' => '6.4584',
                'latitude' => '7.5464',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202252.869433enugu.png',
                'code' => 'EN',
            ],
            [
                'name' => 'FCT, Abuja', 
                'longitude' => '9.0765',
                'latitude' => '7.3986',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202313.225826fct-abuja.jpeg',
                'code' => 'FC',
            ],
            [
                'name' => 'Gombe', 
                'longitude' => '10.2791',
                'latitude' => '11.1731',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202334.211943gombe.jpg',
                'code' => 'GO',
            ],
            [
                'name' => 'Imo', 
                'longitude' => '5.5720',
                'latitude' => '7.0588',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202354.223702imo.jpg',
                'code' => 'IM',
            ],
            [
                'name' => 'Jigawa', 
                'longitude' => '12.2280',
                'latitude' => '9.5616',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202415.741113jigawa.jpeg',
                'code' => 'JI',
            ],
            [
                'name' => 'Kaduna', 
                'longitude' => '10.5105',
                'latitude' => '7.4165',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202447.919101kaduna.png',
                'code' => 'KD',
            ],
            [
                'name' => 'Kano', 
                'longitude' => '12.0022',
                'latitude' => '8.5920',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202507.133586kano.jpeg',
                'code' => 'KN',
            ],
            [
                'name' => 'Katsina', 
                'longitude' => '12.9816',
                'latitude' => '7.6223',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202527.915080katsina.png',
                'code' => 'KT',
            ],
            [
                'name' => 'Kebbi', 
                'longitude' => '11.4942',
                'latitude' => '4.2333',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202551.565545kebbi.png',
                'code' => 'KB',
            ],
            [
                'name' => 'Kogi', 
                'longitude' => '7.7337',
                'latitude' => '6.6906',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202616.865362kogi.png',
                'code' => 'KO',
            ],
            [
                'name' => 'Kwara', 
                'longitude' => '8.9669',
                'latitude' => '4.3874',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202635.947066kwara.jpg',
                'code' => 'KW',
            ],
            [
                'name' => 'Lagos', 
                'longitude' => '6.5244',
                'latitude' => '3.3792',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202654.138489lagos.jpg',
                'code' => 'LA',
            ],
            [
                'name' => 'Nasarawa', 
                'longitude' => '8.4998',
                'latitude' => '8.1997',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202715.561181nassarawa.jpg',
                'code' => 'NA',
            ],
            [
                'name' => 'Niger', 
                'longitude' => '9.9309',
                'latitude' => '5.5983',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202733.261135niger.jpg',
                'code' => 'NI',
            ],
            [
                'name' => 'Ogun', 
                'longitude' => '6.9980',
                'latitude' => '3.4737',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202748.986707ogun.jpg',
                'code' => 'OG',
            ],
            [
                'name' => 'Ondo', 
                'longitude' => '6.9149',
                'latitude' => '5.1478',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202803.295326ondo.jpg',
                'code' => 'OD',
            ],
            [
                'name' => 'Osun', 
                'longitude' => '7.5629',
                'latitude' => '4.5200',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202818.833978osun.jpg',
                'code' => 'OS',
            ],
            [
                'name' => 'Oyo', 
                'longitude' => '8.1574',
                'latitude' => '3.6147',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202838.411470oyo.jpg',
                'code' => 'OY',
            ],
            [
                'name' => 'Plateau', 
                'longitude' => '9.2182',
                'latitude' => '9.5179',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202855.975948plateau.jpg',
                'code' => 'PL',
            ],
            [
                'name' => 'Rivers', 
                'longitude' => '4.8396',
                'latitude' => '6.9112',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202912.622972rivers.jpg',
                'code' => 'RI',
            ],
            [
                'name' => 'Sokoto', 
                'longitude' => '13.0533',
                'latitude' => '5.3223',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202929.156780sokoto.jpg',
                'code' => 'SO',
            ],
            [
                'name' => 'Taraba', 
                'longitude' => '7.9994',
                'latitude' => '10.7740',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-202945.659378taraba.jpg',
                'code' => 'TA',
            ],
            [
                'name' => 'Yobe', 
                'longitude' => '12.2939',
                'latitude' => '11.4390',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-203001.804056yobe.jpg',
                'code' => 'YO',
            ],
            [
                'name' => 'Zamfara', 
                'longitude' => '12.1222',
                'latitude' => '6.2236',
                'image' => 'https://grid3.gov.ng/uploads/group/2019-04-15-203017.300705zamfara.jpg',
                'code' => 'ZM',
            ],
        );
        foreach ($states as $key => $value) {
            DB::table('states')->insert($value);
        }
    }
}
