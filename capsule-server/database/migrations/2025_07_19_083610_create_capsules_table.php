<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('capsules', function (Blueprint $table) {
            $table->id();
            $table->integer("userId");
            $table->text("message");
            $table->string("image")->nullable(); 
            $table->string("voice")->nullable(); 
            $table->string("location");
            $table->enum('mood', ['happy', 'sad', 'angry', 'love',]); 
            $table->enum('privacy', ['public', 'private', 'unlisted']); 
            $table->boolean('is_surprise')->default(false);
            $table->date("revealdate")->nullable();;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('capsules');
    }
};
