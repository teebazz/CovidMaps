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
            $table->string('total_case')->nullable()->default(0);
            $table->string('deaths')->nullable()->default(0);
            $table->string('recoveries')->nullable()->default(0);
            $table->string('active_cases')->nullable()->default(0);
            $table->string('index_cases')->nullable()->default(0);
            $table->string('contact_cases')->nullable()->default(0);
            $table->string('tracing_index')->nullable()->default(0);
            $table->string('tracing_contact')->nullable()->default(0);
            $table->string('tracing_cases')->nullable()->default(0);
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
