<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('image')->nullable();
            $table->string('code')->nullable();
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->unsignedBigInteger('total_case')->nullable()->default(0);
            $table->unsignedBigInteger('deaths')->nullable()->default(0);
            $table->unsignedBigInteger('recoveries')->nullable()->default(0);
            $table->unsignedBigInteger('active_cases')->nullable()->default(0);
            $table->unsignedBigInteger('index_cases')->nullable()->default(0);
            $table->unsignedBigInteger('contact_cases')->nullable()->default(0);
            $table->unsignedBigInteger('tracing_index')->nullable()->default(0);
            $table->unsignedBigInteger('tracing_contact')->nullable()->default(0);
            $table->unsignedBigInteger('tracing_cases')->nullable()->default(0);
            $table->unsignedBigInteger('country_id')->nullable()->default(1);
            $table->mediumText('boundary')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states');
    }
}
