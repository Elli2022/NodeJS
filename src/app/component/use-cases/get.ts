import type { UserRepository } from "../repositories/types";

export default function createGet({
  userRepository,
  logger,
}: {
  userRepository: UserRepository;
  logger: { info: (msg: string) => void };
}) {
  return Object.freeze({ get });

  async function get() {
    try {
      logger.info("[USE-CASE] [GET] Listing users - START!");
      const results = await userRepository.findAll();
      logger.info("[USE-CASE] [GET] Listing users - END!");
      return results;
    } catch (e) {
      const err = e as Error;
      throw err.message ?? err;
    }
  }
}
