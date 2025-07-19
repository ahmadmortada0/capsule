<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CapsuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'userId'=>0,
            'message' => $this->faker->realText(50),
            'location' => $this->faker->city(),
            'mood' => $this->faker->randomElement(['happy', 'sad', 'angry', 'love']),
            'privacy' => $this->faker->randomElement(['public', 'private', 'unlisted']),
            'revealdate' => $this->faker->dateTimeBetween('now', '+2 years'),
        ];
    }
}
